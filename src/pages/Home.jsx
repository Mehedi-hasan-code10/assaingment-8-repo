


import React, { useEffect, useState } from 'react';
import AppCard from '../components/AppCard';

export default function Home() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch('/data/apps.json')
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error(err));
  }, []);

 
  const top8 = apps.slice(0, 8);

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-6">
      {/* Hero Section */}
      {/* <section className="hero bg-base-200 rounded-lg p-10 text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Discover Great Apps</h1>
        <p className="mt-2 text-sm sm:text-base">Find the best apps for productivity, health, art and more.</p>
        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="btn btn-primary">
            App Store
          </a>
          <a href="https://play.google.com" target="_blank" rel="noreferrer" className="btn btn-outline">
            Play Store
          </a>
        </div>
      </section> */}
          
          <section className="hero bg-base-200 rounded-lg p-6 sm:p-10 text-center mb-10">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
    Discover Great Apps
  </h1>
  <p className="mt-2 text-sm sm:text-base md:text-lg">
    Find the best apps for productivity, health, art and more.
  </p>
  <div className="mt-4 flex justify-center gap-3 sm:gap-4 flex-wrap">
    <a
      href="https://apps.apple.com"
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary px-4 sm:px-6"
    >
      App Store
    </a>
    <a
      href="https://play.google.com"
      target="_blank"
      rel="noreferrer"
      className="btn btn-outline px-4 sm:px-6"
    >
      Play Store
    </a>
  </div>
</section>

          <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-4">Trending Apps</h1>
              <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
          </div>

      
      <section>
       

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {top8.map(a => <AppCard key={a.id} app={a} />)}
        </div>

        
        <div className="flex justify-center mt-6">
          <a href="/apps" className="btn btn-ghost bg-purple-600 text-white hover:bg-purple-700">
            Show All
          </a>
        </div>
      </section>
    </div>
  );
}
