import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Chalk from './chalk';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {loading ? (
        <ClipLoader color="#36d7b7" size={60} />
      ) : (
        <Chalk/>
      )}
    </div>
  );
}
