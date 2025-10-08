

import React, { useState, useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

// Toast Component
function Toast({ message }) {
  if (!message) return null
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="alert alert-success shadow-lg">
        <span>{message}</span>
      </div>
    </div>
  )
}

export default function AppDetails() {
  const app = useLoaderData()
  const navigate = useNavigate()
  const [installed, setInstalled] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!app) return
    const list = JSON.parse(localStorage.getItem('installedApps') || '[]')
    setInstalled(list.includes(app.id))
  }, [app])

  if (!app) {
    return (
      <div className="p-8 text-center">
        <h2>App not found</h2>
        <button className="btn mt-4" onClick={() => navigate('/apps')}>
          Back to Apps
        </button>
      </div>
    )
  }

  const handleInstall = () => {
    const list = JSON.parse(localStorage.getItem('installedApps') || '[]')
    if (!list.includes(app.id)) {
      list.push(app.id)
      localStorage.setItem('installedApps', JSON.stringify(list))
      setInstalled(true)
      setToast('✅ App installed successfully!')
      setTimeout(() => setToast(''), 2000)
    }
  }

  const chartData = app.ratings.map(r => ({ name: r.name, count: r.count }))

  return (
    <div className="relative">
      <Toast message={toast} />

    {/* card */}
      <div className=" overflow-hidden ">
      
        <div className="flex flex-col justify-between md:flex-row">
          
          <div className="md:w-1/3 w-ful bg-white p-8 shadow-sm">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-cover"
            />
          </div>

        
          <div className="md:w-2/3 w-full p-6 flex flex-col justify-center">
            <div>
            
              <h1 className="text-2xl font-bold text-gray-800">{app.title}</h1>
              <p className="text-gray-500 mb-4">Developed by <span className='text-purple-700'>{app.companyName}</span></p>

              <hr className='mt-12 mb-12'></hr>
            
              <div className="flex flex-wrap gap-6 text-gray-700 text-sm mb-4">
                <div className='font-bold space-y-2'><img src='/public/icon-downloads.png' className='w-6 h-6 items-center'></img> Downloads <br></br> <span className="font-semibold">{app.downloads.toLocaleString()}</span>M</div>
                <div className='font-bold space-y-2'><img src='/public/icon-ratings.png' className='w-6 h-6'></img>Average Rating <br></br> <span className="font-semibold">{app.ratingAvg}</span> </div>
                <div className='font-bold space-y-2'><img src='/public/icon-review.png' className='w-6 h-6'></img>  Reviews <br></br> <span className="font-semibold">{app.reviews}</span>K</div>
              </div>

              <button
                className={`btn ${installed ? 'btn-disabled' : 'btn-primary'}`}
                onClick={handleInstall}
                disabled={installed}
              >
                {installed ? 'Installed' : `Install Now (${app.size}MB)`}
              </button>
            </div>
          </div>
        </div>

      

       {/* -------- Chart Section -------- */}
        <div className="p-6">
          <hr className='text-gray-300'></hr>
  <h3 className=" text-2xl font-bold mb-3">Ratings</h3>
  <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
      <BarChart
        data={chartData}
        layout="vertical"   
        margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={80} reversed />  
        <Tooltip />
        <Bar dataKey="count" fill="#FACC15" radius={[0, 6, 6, 0]} />  
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>


        {/* -------- Description Section -------- */}
        <div className="p-6">
          <hr className='text-gray-400'></hr>
          <h3 className="font-semibold text-2xl mb-2">Description</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{app.description}</p>
        </div>
      </div>
    </div>
  )
}
