
import React, { useState, useEffect, useMemo } from 'react';
import AppCard from '../components/AppCard';

export default function AllApps() {
  const [apps, setApps] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch('/data/apps.json')
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apps.filter(a => a.title.toLowerCase().includes(q));
  }, [apps, query]);

  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setLoading(true);

   
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div className='w-11/12 mx-auto mt-16'>
      {/*  */}

      <div className='mb-4 text-center'>
        <h1 className='text-5xl font-bold mb-4'>Our All Applications</h1>
        <p className='text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        
         <div className="font-bold text-xl">({filtered.length}) apps Found</div>

        <input
          type="text"
          placeholder="Search apps..."
          value={query}
          onChange={handleSearchChange}
          className="input input-bordered w-[300px] relative z-20"
        />
      </div>

    
      <div className="relative">
       
        {loading && (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm z-10">
            <span className="loading loading-spinner loading-lg text-purple-700"></span>
            <p className="mt-2 text-purple-600 font-semibold text-sm">Loading...</p>
          </div>
        )}

       
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${loading ? 'opacity-50' : 'opacity-100'} transition-opacity`}>
          {filtered.length === 0 && !loading && (
            <div className="p-8 text-center text-gray-500 col-span-full text-4xl">
              No App Found
            </div>
          )}
          {filtered.map(a => (
            <AppCard key={a.id} app={a} />
            
          ))}
        </div>
      </div>
    </div>
  );
}
