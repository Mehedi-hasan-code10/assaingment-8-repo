

// import React, { useState, useEffect, useMemo } from 'react';
// import AppCard from '../components/AppCard';

// export default function MyInstallation() {
//   const [installedIds, setInstalledIds] = useState([]);
//   const [apps, setApps] = useState([]);
//   const [sort, setSort] = useState('none');

//   useEffect(() => {
//     const ids = JSON.parse(localStorage.getItem('installedApps') || '[]');
//     setInstalledIds(ids);

//     fetch('/data/apps.json')
//       .then(r => r.json())
//       .then(data => setApps(data))
//       .catch(err => console.error(err));
//   }, []);

//   // ✅ শুধু ইনস্টল করা অ্যাপগুলো আনব, তারপর ratingAvg অনুযায়ী sort করব
//   const filteredInstalled = useMemo(() => {
//     let res = apps.filter(a => installedIds.includes(a.id));

//     if (sort === 'high-low') res = res.slice().sort((a, b) => b.ratingAvg - a.ratingAvg);
//     if (sort === 'low-high') res = res.slice().sort((a, b) => a.ratingAvg - b.ratingAvg);

//     return res;
//   }, [apps, installedIds, sort]);

//   const uninstall = (id) => {
//     const next = installedIds.filter(i => i !== id);
//     localStorage.setItem('installedApps', JSON.stringify(next));
//     setInstalledIds(next);
//     alert('App uninstalled');
//   };

//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="flex flex-wrap justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">My Installation</h1>

//         <select
//           className="select select-bordered"
//           value={sort}
//           onChange={e => setSort(e.target.value)}
//         >
//           <option value="none">Sort by Rating</option>
//           <option value="high-low">High to Low</option>
//           <option value="low-high">Low to High</option>
//         </select>
//       </div>

//       {/* No App Installed */}
//       {filteredInstalled.length === 0 && (
//         <div className="p-8 text-center">No installed apps</div>
//       )}

//       {/* Installed Apps Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredInstalled.map(a => (
//           <div key={a.id}>
//             <AppCard app={a} />
//             <button
//               className="btn btn-sm btn-error mt-2 w-full"
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
import AppCard from '../components/AppCard';

export default function MyInstallation() {
  const [installedIds, setInstalledIds] = useState([]);
  const [apps, setApps] = useState([]);
  const [sort, setSort] = useState('none');
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalledIds(ids);

    fetch('/data/apps.json')
      .then(r => r.json())
      .then(data => setApps(data))
      .catch(err => console.error(err));
  }, []);

  const filteredInstalled = useMemo(() => {
    let res = apps.filter(a => installedIds.includes(a.id));

    if (sort === 'high-low') res = res.slice().sort((a, b) => b.ratingAvg - a.ratingAvg);
    if (sort === 'low-high') res = res.slice().sort((a, b) => a.ratingAvg - b.ratingAvg);

    return res;
  }, [apps, installedIds, sort]);

  const uninstall = (id) => {
    const next = installedIds.filter(i => i !== id);
    localStorage.setItem('installedApps', JSON.stringify(next));
    setInstalledIds(next);
    showToast('❌ App successfully uninstalled!');
  };

  // ✅ Toast show function
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2500); // ২.৫ সেকেন্ড পরে টোস্ট লুকাবে
  };

  return (
    <div className="relative">
      {/* ✅ Toast message (now top-right) */}
      {toastMsg && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success shadow-lg">
            <span>{toastMsg}</span>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <div>
          <h1 className="text-2xl font-bold">My Installation</h1>
          <p className="text-sm text-gray-500">
            Total Installed:{' '}
            <span className="font-semibold text-purple-600">
              {filteredInstalled.length}
            </span>
          </p>
        </div>

        <select
          className="select select-bordered w-full sm:w-auto"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Sort by Rating</option>
          <option value="high-low">High to Low</option>
          <option value="low-high">Low to High</option>
        </select>
      </div>

      {/* No App Installed */}
      {filteredInstalled.length === 0 && (
        <div className="p-8 text-center">No installed apps</div>
      )}

      {/* Installed Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredInstalled.map((a) => (
          <div key={a.id}>
            <AppCard app={a} />
            <button
              className="btn btn-sm btn-error mt-2 w-full"
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
