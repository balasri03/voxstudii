import React from 'react';

export default function About() {
  return (
    <div className="w-2/3 mx-auto mt-20 rounded-lg p-8 shadow-lg text-white"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
      }}>
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-2">
        <b>VoxStudii</b> is a platform that gives a voice to students, allowing them to share feedback and help improve campus life.
      </p>
      <p>
        Our mission is to bridge the gap between students and administration by making feedback collection simple, transparent, and effective.
      </p>
    </div>
  );
}