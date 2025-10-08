


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 lg:px-20 flex flex-wrap items-center justify-between">
      
      
      <div className="flex-1 flex items-center">
        <NavLink to="/" className="btn btn-ghost normal-case md:text-xl text-purple-600 flex items-center gap-2 text-xs ">
          <img className="w-12 h-12" src="/src/assets/logo.png" alt="Logo" />
          HERO.IO
        </NavLink>
      </div>


      <div className="flex-none lg:hidden">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="flex-1 justify-center hidden lg:flex">
        <nav className="menu menu-horizontal p-0 flex gap-2">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'btn btn-ghost font-bold bg-purple-600' : 'btn btn-ghost'}>Home</NavLink>
          <NavLink to="/apps" className={({ isActive }) => isActive ? 'btn btn-ghost font-bold bg-purple-600' : 'btn btn-ghost'}>Apps</NavLink>
          <NavLink to="/installation" className={({ isActive }) => isActive ? 'btn btn-ghost font-bold bg-purple-600' : 'btn btn-ghost'}>Installation</NavLink>
        </nav>
      </div>

      
      <div className="flex-1 flex justify-end">
        <a
          className="btn btn-outline bg-purple-600 text-white hover:bg-purple-700 ml-2 text-xs"
          href="https://github.com/Mehedi-hasan-code10"
          target="_blank"
          rel="noreferrer"
        > <img className='w-8 h-8 mr-1' src="/src/assets/github-removebg-preview.png" />
          Contribute
        </a>
      </div>

      
      {menuOpen && (
        <div className="w-full flex flex-col lg:hidden mt-2 gap-2">
          <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'btn btn-ghost font-bold w-full' : 'btn btn-ghost w-full'}>Home</NavLink>
          <NavLink to="/apps" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'btn btn-ghost font-bold w-full' : 'btn btn-ghost w-full'}>Apps</NavLink>
          <NavLink to="/installation" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'btn btn-ghost font-bold w-full' : 'btn btn-ghost w-full'}>Installation</NavLink>
        </div>
      )}

    </div>
  );
}


// import React, { useState, useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showLoading, setShowLoading] = useState(false);
//   const location = useLocation();

//   // 🔁 Show loading on every route change
//   useEffect(() => {
//     setShowLoading(true);
//     const timer = setTimeout(() => setShowLoading(false), 2000); // 2 sec minimum loading
//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   return (
//     <>
//       {/* 🔄 Loading overlay */}
//       {showLoading && (
//         <div className="fixed inset-0 bg-white bg-opacity-70 flex flex-col justify-center items-center z-50">
//           {/* top bar */}
//           <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-loading-bar"></div>

//           {/* middle spinner */}
//           <span className="loading loading-spinner loading-lg text-purple-700"></span>

//           {/* optional text */}
//           <p className="mt-2 text-purple-600 font-semibold text-sm">Loading...</p>
//         </div>
//       )}

//       {/* 🔹 Navbar */}
//       <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 lg:px-20 flex flex-wrap items-center justify-between relative z-10">
//         {/* Logo */}
//         <div className="flex-1 flex items-center">
//           <NavLink
//             to="/"
//             className="btn btn-ghost normal-case md:text-xl text-purple-600 flex items-center gap-2 text-xs"
//           >
//             <img className="w-12 h-12" src="/src/assets/logo.png" alt="Logo" />
//             HERO.IO
//           </NavLink>
//         </div>

//         {/* Hamburger (mobile) */}
//         <div className="flex-none lg:hidden">
//           <button
//             className="btn btn-square btn-ghost"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Nav links (desktop) */}
//         <div className="flex-1 justify-center hidden lg:flex">
//           <nav className="menu menu-horizontal p-0 flex gap-2">
//             <NavLink
//               to="/"
//               end
//               className={({ isActive }) =>
//                 isActive
//                   ? 'btn btn-ghost font-bold bg-purple-600 text-white'
//                   : 'btn btn-ghost'
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/apps"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'btn btn-ghost font-bold bg-purple-600 text-white'
//                   : 'btn btn-ghost'
//               }
//             >
//               Apps
//             </NavLink>
//             <NavLink
//               to="/installation"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'btn btn-ghost font-bold bg-purple-600 text-white'
//                   : 'btn btn-ghost'
//               }
//             >
//               Installation
//             </NavLink>
//           </nav>
//         </div>

//         {/* Right button */}
//         <div className="flex-1 flex justify-end">
//           <a
//             className="btn btn-outline bg-purple-600 text-white hover:bg-purple-700 ml-2 text-xs"
//             href="https://github.com/Mehedi-hasan-code10"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Contribute
//           </a>
//         </div>

//         {/* Mobile menu */}
//         {menuOpen && (
//           <div className="w-full flex flex-col lg:hidden mt-2 gap-2">
//             <NavLink to="/" end onClick={() => setMenuOpen(false)} className="btn btn-ghost w-full">
//               Home
//             </NavLink>
//             <NavLink to="/apps" onClick={() => setMenuOpen(false)} className="btn btn-ghost w-full">
//               Apps
//             </NavLink>
//             <NavLink to="/installation" onClick={() => setMenuOpen(false)} className="btn btn-ghost w-full">
//               Installation
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
