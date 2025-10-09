
// import React, { useState, useEffect, useMemo } from 'react';

// export default function MyInstallation() {
//   const [installedIds, setInstalledIds] = useState([]);
//   const [apps, setApps] = useState([]);
//   const [sort, setSort] = useState('none');
//   const [toastMsg, setToastMsg] = useState('');

//   // Load installed apps and apps data
//   useEffect(() => {
//     const ids = JSON.parse(localStorage.getItem('installedApps') || '[]');
//     setInstalledIds(ids);

//     fetch('/data/apps.json')
//       .then((r) => r.json())
//       .then((data) => setApps(data))
//       .catch((err) => console.error(err));
//   }, []);

//   // Filter installed apps + sorting
//   const filteredInstalled = useMemo(() => {
//     let res = apps.filter((a) => installedIds.includes(a.id));

//     if (sort === 'high-low') res.sort((a, b) => b.ratingAvg - a.ratingAvg);
//     if (sort === 'low-high') res.sort((a, b) => a.ratingAvg - b.ratingAvg);

//     return res;
//   }, [apps, installedIds, sort]);

//   // Uninstall app
//   const uninstall = (id) => {
//     const next = installedIds.filter((i) => i !== id);
//     localStorage.setItem('installedApps', JSON.stringify(next));
//     setInstalledIds(next);
//     showToast('❌ App successfully uninstalled!');
//   };

//   // Toast
//   const showToast = (msg) => {
//     setToastMsg(msg);
//     setTimeout(() => setToastMsg(''), 2500);
//   };

//   return (
//     <div className="relative w-11/12 mx-auto">
//       {/*  */}
//       {/* Header */}
//       <div className="mb-6 text-center mt-10">
//         <h1 className="text-3xl font-bold mb-2">Your Installed Apps</h1>
//         <p className="text-gray-400">Explore all trending apps developed by us</p>
//       </div>

//       {/* Toast */}
//       {toastMsg && (
//         <div className="fixed top-4 right-4 z-50">
//           <div className="alert alert-success shadow-lg">
//             <span>{toastMsg}</span>
//           </div>
//         </div>
//       )}

//       {/* Sorting + Total Installed */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
//         <p className="text-xl font-bold">
//           <span className="font-bold ">{filteredInstalled.length}</span>
//             Apps Found{' '}
//         </p>

//         <select
//           className="select select-bordered w-full sm:w-auto"
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//         >
//           <option value="none">Sort by Rating</option>
//           <option value="high-low">High to Low</option>
//           <option value="low-high">Low to High</option>
//         </select>
//       </div>

//       {/* Empty state */}
//       {filteredInstalled.length === 0 && (
//         <div className="p-8 text-center text-gray-500 text-4xl">No installed apps</div>
//       )}

//       {/* Installed apps list */}
//       <div className="grid grid-cols-1 gap-4 bg-white">
//         {filteredInstalled.map((a) => (
//           <div
//             key={a.id}
//             className="flex flex-col sm:flex-row justify-between items-center p-4  rounded-lg shadow-md"
//           >
//             {/* Left: Image */}
//             <img src={a.image} alt={a.title} className="w-16 h-16 rounded-md object-cover" />

//             {/* Middle: Title + Downloads & Reviews */}
//             <div className="flex gap-1 items-center flex-col sm:flex-row sm:ml-4 flex-1 text-center sm:text-left mt-2 sm:mt-0">
//               {/* <h2 className="font-bold text-lg text-gray-800">{a.title}</h2> */}


//               <div className=''>
//                 <h2 className="font-bold text-lg text-gray-800">{a.title}</h2>
//                 <div className="flex gap-4 mt-1 text-gray-500 text-sm items-center">
//                 <span className='flex items-center gap-1 text-[#00D390]'><img src='/public/icon-downloads.png' className='w-4 h-4'></img> {a.downloads}</span>
//                 <span className='flex items-center gap-1 text-yellow-400 font-semibold'><img className='w-4 h-4' src='/public/icon-ratings.png'></img> {a.ratingAvg}</span>
             
//                   <p className='text-gray-400'>{a.size}MB</p>
//                 </div>
              
//               </div>


//             </div>

//             {/* <div className="flex gap-1 items-center flex-col sm:flex-row sm:ml-4 flex-1 text-center sm:text-left mt-2 sm:mt-0 border">
//               <h2 className="font-bold text-lg text-gray-800">{a.title}</h2>
//               <div className="flex gap-4 mt-1 text-gray-500 text-sm">
//                 <span className='flex items-center gap-1'><img src='/public/icon-downloads.png' className='w-6 h-6'></img> {a.downloads}</span>
//                 <span className='flex items-center gap-1 text-yellow-400 font-semibold'><img className='w-4 h-4' src='/public/icon-ratings.png'></img> {a.ratingAvg}</span>
//               </div>
//             </div> */}

//             {/* Right: Uninstall button */}
//             <button
//               className="btn btn-sm  mt-2 sm:mt-0 bg-[#00D390] text-white"
//               onClick={() => uninstall(a.id)}
//             >
//               Uninstall
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useMemo } from 'react';

export default function MyInstallation() {
  const [installedIds, setInstalledIds] = useState([]);
  const [apps, setApps] = useState([]);
  const [sort, setSort] = useState('none');
  const [toastMsg, setToastMsg] = useState('');

  // Load installed apps and apps data
  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalledIds(ids);

    fetch('/data/apps.json')
      .then((r) => r.json())
      .then((data) => setApps(data))
      .catch((err) => console.error(err));
  }, []);

  // Filter installed apps + sorting
  const filteredInstalled = useMemo(() => {
    let res = apps.filter((a) => installedIds.includes(a.id));

    // Sort by rating
    if (sort === 'high-low') res.sort((a, b) => b.ratingAvg - a.ratingAvg);
    if (sort === 'low-high') res.sort((a, b) => a.ratingAvg - b.ratingAvg);

    // ✅ Sort by downloads
    if (sort === 'downloads-high-low') res.sort((a, b) => b.downloads - a.downloads);
    if (sort === 'downloads-low-high') res.sort((a, b) => a.downloads - b.downloads);

    return res;
  }, [apps, installedIds, sort]);

  // Uninstall app
  const uninstall = (id) => {
    const next = installedIds.filter((i) => i !== id);
    localStorage.setItem('installedApps', JSON.stringify(next));
    setInstalledIds(next);
    showToast('❌ App successfully uninstalled!');
  };

  // Toast
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2500);
  };

  return (
    <div className="relative w-11/12 mx-auto">
      {/* Header */}
      <div className="mb-6 text-center mt-10">
        <h1 className="text-5xl font-bold mb-2">Your Installed Apps</h1>
        <p className="text-gray-400">Explore all trending apps developed by us</p>
      </div>

      {/* Toast */}
      {toastMsg && (
        <div className="fixed top-4 right-4 z-50">
          <div className="alert alert-success shadow-lg">
            <span>{toastMsg}</span>
          </div>
        </div>
      )}

      {/* Sorting + Total Installed */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <p className="text-xl font-bold">  
          <span className="font-bold ">({filteredInstalled.length})</span> 
            Apps Found{' '}
        </p>

        <select
          className="select select-bordered w-full sm:w-auto"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Sort by</option>
          {/* <option value="high-low">Rating: High to Low</option>
          <option value="low-high">Rating: Low to High</option> */}
          <option value="downloads-high-low"> High to Low</option>
          <option value="downloads-low-high">Low to High</option>
        </select>
      </div>

      {/* Empty state */}
      {filteredInstalled.length === 0 && (
        <div className="p-8 text-center text-gray-500 text-4xl">No installed apps</div>
      )}

      {/* Installed apps list */}
      <div className="grid grid-cols-1 gap-4 bg-white">
        {filteredInstalled.map((a) => (
          <div
            key={a.id}
            className="flex flex-col sm:flex-row justify-between items-center p-4  rounded-lg shadow-md"
          >
            {/* Left: Image */}
            <img src={a.image} alt={a.title} className="w-16 h-16 rounded-md object-cover" />

            {/* Middle: Title + Downloads & Reviews */}
            <div className="flex gap-1 items-center flex-col sm:flex-row sm:ml-4 flex-1 text-center sm:text-left mt-2 sm:mt-0">
              <div>
                <h2 className="font-bold text-lg text-gray-800">{a.title}</h2>
                <div className="flex gap-4 mt-1 text-gray-500 text-sm items-center">
                  <span className="flex items-center gap-1 text-[#00D390]">
                    <img src="/icon-downloads.png" className="w-4 h-4" alt="Downloads" /> {a.downloads}M
                  </span>
                  <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                    <img className="w-4 h-4" src="/icon-ratings.png" alt="Ratings" /> {a.ratingAvg}
                  </span>
                  <p className="text-gray-400">{a.size}MB</p>
                </div>
              </div>
            </div>

            {/* Right: Uninstall button */}
            <button
              className="btn btn-sm mt-2 sm:mt-0 bg-[#00D390] text-white"
              onClick={() => uninstall(a.id)}
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
