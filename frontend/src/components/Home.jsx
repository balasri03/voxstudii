import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import axios from './Axios_config';

function Home() {
  const { isAdmin } = useAuth();
  useEffect(()=>{
    axios.get(`/home`).then((response) => {
      setProducts(response.data.data);
    })
    .catch((error) => {
      console.error("There was an error fetching the home data!", error);
    });

  },[]);

  return (
    <div>
      <h1 className="text-4xl sm:text-4xl text-white font-bold text-center mb-2">Welcome to VoxStudii</h1>
      <h5 className="text-xs sm:text-sm text-white text-center">A platform that gives a voice to students...</h5>
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto mt-10 rounded-lg p-4 sm:p-8 shadow-lg transition-transform duration-200 hover:scale-105"
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
        }}>
        <p className="text-center text-base sm:text-lg text-white">Please navigate to the feedback form or admin dashboard.</p>
        <div className="mt-8 text-center text-slate-800 text-lg font-semibold w-full sm:w-2/3 bg-blue-300 rounded-lg p-3 sm:p-4 mx-auto transition-transform duration-200 hover:scale-105">
          <Link to="/feedback">My Vox</Link>
        </div>
        <div className="mt-8 text-center text-slate-800 text-lg w-full font-semibold sm:w-2/3 bg-blue-300 rounded-lg p-3 sm:p-4 mx-auto transition-transform duration-200 hover:scale-105">
          <Link to="/admin">Admin Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;