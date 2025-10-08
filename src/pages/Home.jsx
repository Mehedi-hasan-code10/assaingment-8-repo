
import React, { useEffect, useState } from 'react';
import AppCard from '../components/AppCard';
import { Link } from 'react-router-dom';

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
    <div className="">


      {/* Hero Section */}


<section className=" text-center mb-10 mt-16">
  
  
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
    We Build<br></br>
<span className='text-purple-600'>Productive</span> Apps
  </h1>

  
        <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          
    we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.ur goal is to turn your ideas into digital experiences that truly make an impact
  </p>

 
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <a
      href="https://play.google.com"
      target="_blank"
      rel="noreferrer"
      className="btn btn-outline px-6 sm:px-8 shadow-md"
    >  <img src='/playstore-removebg-preview.png' className='w-8 h-8'></img>
      Play Store
          </a>
          
    <a 
      href="https://apps.apple.com"
      target="_blank"
      rel="noreferrer"
      className="btn btn-outline px-6 sm:px-8 shadow-md"
          >
            <img src='/app_store_2-removebg-preview.png' className='w-8 h-8'></img>
      App Store
    </a>

  </div>

  
  <div className="mt-10 flex justify-center w-full">
    <img 
      src="/hero.png"
      alt="App showcase"
      className="w-64 sm:w-80 lg:w-[900px] rounded-xl drop-shadow-lg"
    />
        </div>
        

       

        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full flex justify-center items-center
          flex-col text-white min-h-[300px] space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex space-x-30 max-sm:space-x-0 max-sm:space-y-10  text-center max-sm:flex-col">
          <div className="space-y-1">
            <h1 className="text-sm text-gray-300">Total DOwnloads</h1>
            <h1 className="font-bold text-4xl">19.6M</h1>
            <h1 className="text-sm text-gray-300">21% More Than Last Month</h1>
          </div>
          <div className="space-y-1">
            <h1 className="text-sm text-gray-300">Total Reviews</h1>
            <h1 className="font-bold text-4xl">906K</h1>
            <h1 className="text-sm text-gray-300">46% more than last month</h1>
          </div>
          <div className="space-y-1">
            <h1 className="text-sm text-gray-300">Active Apps</h1>
            <h1 className="font-bold text-4xl">132+</h1>
            <h1 className="text-sm text-gray-300">31 more will Launch</h1>
          </div>
        </div>
      </div>

</section>






          <div className="text-center mb-6">
              <h1 className="text-4xl font-bold mb-4">Trending Apps</h1>
              <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
          </div>

      
      <section className=' w-11/12 mx-auto'>
       

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {top8.map(a => <AppCard key={a.id} app={a} />)}
        </div>

        
        <div className="flex justify-center mt-6">
        <Link to="/apps" className="btn btn-outline bg-purple-600 text-white hover:bg-purple-700">
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
}

