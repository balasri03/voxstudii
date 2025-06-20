import React, { useEffect, useState } from 'react';
import axios from './Axios_config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const adminBelongstoMap = {
  sai: 'Food',
  balasri: 'Academics',
  jagadish: 'Hostel',
  pavani: 'Others'
};

export default function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [toDeleteId, setToDeleteId] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const username = localStorage.getItem('adminUsername') || 'sai';
  const belongsto = localStorage.getItem('adminBelongsto') || adminBelongstoMap[username] || 'Food';

  useEffect(() => {
    axios.get(`/feedback?belongsto=${belongsto}`).then((res) => {
      setFeedbacks(res.data);
    });
  }, [belongsto]);

  const askDelete = (id) => {
    setToDeleteId(id);
    setShowPopup(true);
  };

  const confirmDelete = async () => {
    await axios.delete(`/feedback/${toDeleteId}`);
    setFeedbacks(feedbacks.filter((f) => f._id !== toDeleteId));
    setShowPopup(false);
    setToDeleteId(null);
  };

  const cancelDelete = () => {
    setShowPopup(false);
    setToDeleteId(null);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('adminUsername');
    localStorage.removeItem('adminBelongsto');
    navigate('/admin');
  };

  return (
    <div className="w-full sm:w-4/5 md:w-3/4 mx-auto mt-10 rounded-lg p-4 sm:p-8 shadow-lg"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
      }}>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl text-white font-semibold mb-2 sm:mb-0">Feedbacks for {belongsto}</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <ul className="space-y-2 text-white">
        {feedbacks.length === 0 && (
          <li className="text-gray-400">No feedbacks</li>
        )}
        {feedbacks.map((f) => (
          <li key={f._id} className="border p-4 rounded shadow">
            <p className="text-sm text-gray-200">{f.message}</p>
            <p className="text-xs text-gray-400 mt-1">By: {f.name || 'Anonymous'}</p>
            <button
              onClick={() => askDelete(f._id)}
              className="text-red-500 text-sm mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-800 bg-opacity-60">
          <div className="bg-slate-400 rounded-lg shadow-lg p-6 w-11/12 max-w-sm"
            style={{
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
            }}>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Confirm Delete</h3>
            <p className="text-gray-700 mb-6">Are you sure you want to delete this feedback?</p>
            <div className="flex justify-end  space-x-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}