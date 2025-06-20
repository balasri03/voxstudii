import React from 'react';

export default function Contact() {
  return (
    <div className="w-2/3 mx-auto mt-20 rounded-lg p-8 shadow-lg text-white"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
      }}>
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-2">
        Have questions or suggestions? Reach out to us!
      </p>
      <ul className="mb-2">
        <li>Email: <a href="mailto:balasri1729@gmail.com" className="text-blue-300 underline">balasri1729@gmail.com</a></li>
        <li>Phone: <span className="text-blue-300">7780108498</span></li>
      </ul>
      <p>
        We value your feedback and will get back to you as soon as possible.
      </p>
    </div>
  );
}