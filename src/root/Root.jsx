


import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Root() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    
    const allowedPaths = ['/', '/apps', '/installation'];

    if (allowedPaths.includes(location.pathname)) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    } else {
     
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

     

      <div className='flex-1'>
           <div
          className={`transition-opacity duration-300 ${
            loading ? 'opacity-30 pointer-events-none' : 'opacity-100'
          }`}
        >
          <Outlet />
        </div>
     </div>

        
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg">
            <span className="loading loading-spinner loading-lg text-purple-700"></span>
            <p className="mt-2 text-purple-600 font-semibold text-sm">Loading...</p>
          </div>
        )}

      <Footer />
    </div>
  );
}
