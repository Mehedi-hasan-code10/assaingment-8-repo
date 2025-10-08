import React, { useState, useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import Toast from '../components/Toast'

export default function AppDetails(){
  const app = useLoaderData() 
  const navigate = useNavigate()
  const [installed, setInstalled] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    if(!app) return
    const list = JSON.parse(localStorage.getItem('installedApps') || '[]')
    setInstalled(list.includes(app.id))
  }, [app])

  if(!app){
    return (
      <div className="p-8 text-center">
        <h2>App not found</h2>
        <button className="btn mt-4" onClick={() => navigate('/apps')}>Back to Apps</button>
      </div>
    )
  }

  const handleInstall = () => {
    const list = JSON.parse(localStorage.getItem('installedApps') || '[]')
    if(!list.includes(app.id)){
      list.push(app.id)
      localStorage.setItem('installedApps', JSON.stringify(list))
      setInstalled(true)
      setToast('App installed successfully')
      setTimeout(() => setToast(''), 2000)
    }
  }

  const chartData = app.ratings.map(r => ({ name: r.name, count: r.count }))

  return (
    <div className="grid grid-cols-2 gap-6">
      <Toast message={toast} />
      <div>
        <img src={app.image} alt={app.title} className="w-full h-96 object-cover rounded" />
        {/* এখানে ইমেজ— example.png */}
      </div>
      <div>
        <h1 className="text-2xl font-bold">{app.title}</h1>
        <p className="text-sm text-muted">{app.companyName}</p>
        <div className="mt-4 flex gap-4 text-sm">
          <div>⭐ {app.ratingAvg}</div>
          <div>{app.downloads.toLocaleString()} downloads</div>
          <div>{app.reviews} reviews</div>
        </div>

        <div className="mt-6">
          <button className={`btn ${installed ? 'btn-disabled' : 'btn-primary'}`} onClick={handleInstall} disabled={installed}>
            {installed ? 'Installed' : 'Install'}
          </button>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Reviews breakdown</h3>
          <div style={{width: '100%', height: 200}}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Description</h3>
          <p className="mt-2 text-sm">{app.description}</p>
        </div>
      </div>
    </div>
  )
}
