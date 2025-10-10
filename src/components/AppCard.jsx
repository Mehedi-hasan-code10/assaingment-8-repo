
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function AppCard({ app }) {
//   return (
//     <Link
//       to={`/apps/${app.id}`}
     
//       className="card flex bg-white justify-between shadow-lg p-3"
      
//     >
      
//       <img
//         src={app.image}
//         alt={app.title}
//         className="w-8/12 object-cover self-center mb-3"
//       />

     




//       <section>
//         <h2 className="text-sm font-semibold mb-3">{app.title}</h2>
//          <div className="flex justify-between text-xs">
        
//         <span className="bg-gray-200 rounded-md px-2 py-1 flex justify-between gap-1 text-green-600 "> <img src='/icon-downloads.png' className='w-4 h-4'></img>
//           {app.downloads.toLocaleString()}M
//         </span>
//         <span className="flex items-center gap-1 bg-yellow-400/30 rounded-md px-2 py-1 backdrop-blur-sm">
//           <img src="/icon-ratings.png" className="w-4 h-4" alt="rating" />
//           <span className="font-medium text-yellow-800">{app.ratingAvg}</span>
//         </span>
//       </div>
//       </section>

//     </Link>
//   );
// }



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function AppCard({ app }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      navigate(`/apps/${app.id}`);
    }, 500); 
  };

  return (
    <div
      onClick={handleClick}
      className="relative card flex bg-white justify-between shadow-lg p-3 cursor-pointer"
    >
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/50">
          <div className="h-2 w-3/4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-red-600 animate-loading-bar"></div>
          </div>
        </div>
      )}

      <img
        src={app.image}
        alt={app.title}
        className="w-8/12 object-cover self-center mb-3"
      />

      <section>
        <h2 className="text-sm font-semibold mb-3">{app.title}</h2>
        <div className="flex justify-between text-xs">
          <span className="bg-gray-200 rounded-md px-2 py-1 flex justify-between gap-1 text-green-600">
            <img src='/icon-downloads.png' className='w-4 h-4' alt="downloads" />
            {app.downloads.toLocaleString()}M
          </span>
          <span className="flex items-center gap-1 bg-yellow-400/30 rounded-md px-2 py-1 backdrop-blur-sm">
            <img src="/icon-ratings.png" className="w-4 h-4" alt="rating" />
            <span className="font-medium text-yellow-800">{app.ratingAvg}</span>
          </span>
        </div>
      </section>
    </div>
  );
}
