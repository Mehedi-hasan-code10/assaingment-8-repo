

import React, { useState, useEffect, useMemo } from 'react';
import AppCard from '../components/AppCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function AllApps() {
  const [apps, setApps] = useState([]);
  const [query, setQuery] = useState('');
  const [fetchLoading, setFetchLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    fetch('/data/apps.json')
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error(err))
      .finally(() => setFetchLoading(false));
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setSearchLoading(false);
      return;
    }
    setSearchLoading(true);
    const timeout = setTimeout(() => setSearchLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleSearchChange = (e) => {
    let value = e.target.value;
    if (value.startsWith(' ')) return;
    setQuery(value);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apps.filter(a => a.title.toLowerCase().includes(q));
  }, [apps, query]);

  return (
    <div className='w-11/12 mx-auto mt-16'>

      <div className='mb-4 text-center'>
        <h1 className='text-5xl font-bold mb-4'>Our All Applications</h1>
        <p className='text-gray-400'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <div className="font-bold text-xl">({filtered.length}) apps Found</div>

       
        <div className="relative w-[300px]">
          <input 
            type="text"
            placeholder="Search apps..."
            value={query}
            onChange={handleSearchChange}
            className="input input-bordered w-full pl-10"
          />
          <FontAwesomeIcon 
            icon={faMagnifyingGlass} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
          />
        </div>
      </div>

      <div className="relative">
        {(fetchLoading || searchLoading) && (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-white/60 backdrop-blur-sm z-10">
            <span className="loading loading-spinner loading-lg text-purple-700"></span>
            <p className="mt-2 text-purple-600 font-semibold text-sm">Loading...</p>
          </div>
        )}

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${
            fetchLoading || searchLoading ? 'opacity-50' : 'opacity-100'
          } transition-opacity`}
        >
          {filtered.length === 0 && !(fetchLoading || searchLoading) && (
            <div className="p-8 text-center text-gray-500 col-span-full text-4xl">
              No App Found
            </div>
          )}

          {filtered.map((a) => (
            <AppCard key={a.id} app={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
