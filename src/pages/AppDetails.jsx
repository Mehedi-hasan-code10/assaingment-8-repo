
import React, { useState, useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import toast, { Toaster } from 'react-hot-toast'

export default function AppDetails() {
  const app = useLoaderData()
  const navigate = useNavigate()
  const [installed, setInstalled] = useState(false)

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
      toast.success(' App installed successfully!')
    } else {
      toast.error(' App already installed!')
    }
  }

  const chartData = app.ratings.map(r => ({ name: r.name, count: r.count }))

  return (
    <div className="relative w-11/12 mx-auto mt-16">
      <Toaster position="top-right" />

      
      <div className="overflow-hidden">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="md:w-1/3 w-full bg-white p-8 shadow-sm">
            <img
              src={app.image || 'https://via.placeholder.com/150'} 
              alt={app.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 w-full p-6 flex flex-col justify-between min-h-[340px]">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{app.title}</h1>
              <p className="text-gray-500 mb-4 text-xl font-semibold">
                Developed by <span className="text-purple-700">{app.companyName}</span>
              </p>

              <hr className="mt-12 mb-12 text-gray-300" />

              <div className="flex flex-wrap gap-16 text-gray-700 text-sm mb-4">
                <div className="font-bold space-y-2 text-2xl">
                  <img src="/icon-downloads.png" className="w-8 h-8" /> Downloads <br />{' '}
                  <span className="font-semibold">{app.downloads.toLocaleString()}</span>M
                </div>
                <div className="font-bold space-y-2 text-2xl">
                  <img src="/icon-ratings.png" className="w-8 h-8" /> Average Rating <br />{' '}
                  <span className="font-semibold">{app.ratingAvg}</span>
                </div>
                <div className="font-bold space-y-2 text-2xl">
                  <img src="/icon-review.png" className="w-8 h-8" /> Reviews <br />{' '}
                  <span className="font-semibold">{app.reviews}</span>K
                </div>
              </div>

              <button
                className={`btn ${installed ? 'btn-disabled' : 'text-white bg-[#00D390]'}`}
                onClick={handleInstall}
                disabled={installed}
              >
                {installed ? 'Installed' : `Install Now (${app.size}MB)`}
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-10 rounded-xl shadow-sm bg-white">
        <hr className="border-gray-300 mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-3 pt-4">Ratings</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={70} reversed tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: '#fef9c3' }} contentStyle={{ backgroundColor: '#fff8dc', borderRadius: '8px', border: '1px solid #fde68a' }} />
              <Bar dataKey="count" fill="#FACC15" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      
      <div className="">
        <hr className="text-gray-400" />
        <h3 className="font-semibold text-2xl mb-2">Description</h3>
        <p className="text-md font-medium text-gray-700 leading-loose">{app.description}</p>
      </div>
    </div>
  )
}
