// import React, { useState, useEffect, useMemo } from 'react'
// import AppCard from '../components/AppCard'
// import Loading from '../components/Loading'

// export default function AllApps(){
//   const [apps, setApps] = useState([])
//   const [query, setQuery] = useState('')
//   const [sort, setSort] = useState('none')
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch('/data/apps.json')
//       .then(res => res.json())
//       .then(data => setApps(data))
//       .catch(err => console.error(err))
//       .finally(() => setLoading(false))
//   }, [])

//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase()
//     let res = apps.filter(a => a.title.toLowerCase().includes(q))
//     if (sort === 'high-low') res = res.slice().sort((a,b) => b.downloads - a.downloads)
//     if (sort === 'low-high') res = res.slice().sort((a,b) => a.downloads - b.downloads)
//     return res
//   }, [apps, query, sort])

//   return (
//       <div>
          
//       <div className=" items-center mb-4">
//         {/* <div>
//           <h1 className="text-2xl font-bold">All Apps</h1>
//           <p className="text-sm">Browse all available apps</p>
//         </div> */}
//         <div className="flex justify-between gap-2 items-center">
//           <div>{filtered.length} apps</div>
//           <input type="text" placeholder="Search apps..." value={query} onChange={e => setQuery(e.target.value)} className="input input-bordered" />
//           <select className="select select-bordered" value={sort} onChange={e => setSort(e.target.value)}>
//             <option value="none">Sort by downloads</option>
//             <option value="high-low">High-Low</option>
//             <option value="low-high">Low-High</option>
//           </select>
//         </div>
//       </div>

//       {loading && <Loading />}
//       {!loading && filtered.length === 0 && <div className="p-8 text-center">No App Found</div>}

//       <div className="grid grid-cols-4 gap-4">
//         {filtered.map(a => <AppCard key={a.id} app={a} />)}
//       </div>
//     </div>
//   )
// }


//bad ........
// import React, { useState, useEffect, useMemo } from 'react'
// import AppCard from '../components/AppCard'
// import Loading from '../components/Loading'

// export default function AllApps(){
//   const [apps, setApps] = useState([])
//   const [query, setQuery] = useState('')
//   const [sort, setSort] = useState('none')
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch('/data/apps.json')
//       .then(res => res.json())
//       .then(data => setApps(data))
//       .catch(err => console.error(err))
//       .finally(() => setLoading(false))
//   }, [])

//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase()
//     let res = apps.filter(a => a.title.toLowerCase().includes(q))
//     if (sort === 'high-low') res = res.slice().sort((a,b) => b.downloads - a.downloads)
//     if (sort === 'low-high') res = res.slice().sort((a,b) => a.downloads - b.downloads)
//     return res
//   }, [apps, query, sort])

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h1 className="text-2xl font-bold">All Apps</h1>
//           <p className="text-sm">Browse all available apps</p>
//         </div>
//         <div className="flex gap-2 items-center">
//           <div>{filtered.length} apps</div>
//           <input type="text" placeholder="Search apps..." value={query} onChange={e => setQuery(e.target.value)} className="input input-bordered" />
//           <select className="select select-bordered" value={sort} onChange={e => setSort(e.target.value)}>
//             <option value="none">Sort by downloads</option>
//             <option value="high-low">High-Low</option>
//             <option value="low-high">Low-High</option>
//           </select>
//         </div>
//       </div>

//       {loading && <Loading />}
//       {!loading && filtered.length === 0 && <div className="p-8 text-center">No App Found</div>}

//       <div className="grid grid-cols-4 gap-4">
//         {filtered.map(a => <AppCard key={a.id} app={a} />)}
//       </div>
//     </div>
//   )
// }
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
    <div>

      <div className='mb-4 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Our All Applications</h1>
        <p className='text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <div className="font-bold text-xl">{filtered.length} apps Found</div>

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
            <div className="p-8 text-center text-gray-500 col-span-full">
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
