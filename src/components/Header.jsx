// import React from 'react'
// import { NavLink } from 'react-router-dom'

// export default function Header(){
//   return (
//     <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
//       <div className="flex-1">
//               <NavLink to="/" className="btn btn-ghost normal-case text-xl text-purple-600">
//                   <img className='w-[50px] h-[50px]' src='/src/assets/logo.png'></img> HERO.IO</NavLink>
//       </div>
//       <div className="flex-none">
//         <nav className="menu menu-horizontal p-0">
//           <NavLink to="/" end className={({isActive}) => isActive ? 'btn btn-ghost font-bold' : 'btn btn-ghost'}>Home</NavLink>
//           <NavLink to="/apps" className={({isActive}) => isActive ? 'btn btn-ghost font-bold' : 'btn btn-ghost'}>Apps</NavLink>
//           <NavLink to="/installation" className={({isActive}) => isActive ? 'btn btn-ghost font-bold' : 'btn btn-ghost'}>Installation</NavLink>
          
//               </nav>
              


//           </div>
//           <div><a className="btn btn-outline ml-2" href="https://github.com/Mehedi-hasan-code10" target="_blank" rel="noreferrer">Contribute</a></div>
//     </div>
//   )
// }

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 lg:px-20 flex flex-wrap items-center justify-between">
      
      {/* Logo left */}
      <div className="flex-1 flex items-center">
        <NavLink to="/" className="btn btn-ghost normal-case md:text-xl text-purple-600 flex items-center gap-2 text-xs ">
          <img className="w-12 h-12" src="/src/assets/logo.png" alt="Logo" />
          HERO.IO
        </NavLink>
      </div>

      {/* Hamburger for mobile */}
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

      {/* Nav links center (desktop) */}
      <div className="flex-1 justify-center hidden lg:flex">
        <nav className="menu menu-horizontal p-0 flex gap-2">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'btn btn-ghost font-bold bg-purple-600' : 'btn btn-ghost'}>Home</NavLink>
          <NavLink to="/apps" className={({ isActive }) => isActive ? 'btn btn-ghost font-bold bg-purple-600' : 'btn btn-ghost'}>Apps</NavLink>
          <NavLink to="/installation" className={({ isActive }) => isActive ? 'btn btn-ghost font-bold bg-purple-600' : 'btn btn-ghost'}>Installation</NavLink>
        </nav>
      </div>

      {/* Contribute button right */}
      <div className="flex-1 flex justify-end">
        <a
          className="btn btn-outline bg-purple-600 text-white hover:bg-purple-700 ml-2 text-xs"
          href="https://github.com/Mehedi-hasan-code10"
          target="_blank"
          rel="noreferrer"
        >
          Contribute
        </a>
      </div>

      {/* Mobile menu */}
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
