
import React, { useState, useEffect, useMemo } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function MyInstallation() {
  const [installedIds, setInstalledIds] = useState([])
  const [apps, setApps] = useState([])
  const [sort, setSort] = useState('none')

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem('installedApps') || '[]')
    setInstalledIds(ids)

    fetch('/data/apps.json')
      .then((r) => r.json())
      .then((data) => setApps(data))
      .catch((err) => console.error(err))
  }, [])

  const filteredInstalled = useMemo(() => {
    let res = apps.filter((a) => installedIds.includes(a.id))

    if (sort === 'downloads-high-low') res.sort((a, b) => b.downloads - a.downloads)
    if (sort === 'downloads-low-high') res.sort((a, b) => a.downloads - b.downloads)

    return res
  }, [apps, installedIds, sort])

  const uninstall = (id) => {
    const next = installedIds.filter((i) => i !== id)
    localStorage.setItem('installedApps', JSON.stringify(next))
    setInstalledIds(next)
    toast.success('❌ App successfully uninstalled!')
  }

  return (
    <div className="relative w-11/12 mx-auto">
      <Toaster position="top-right" />

      <div className="mb-6 text-center mt-10">
        <h1 className="text-5xl font-bold mb-2">Your Installed Apps</h1>
        <p className="text-gray-400">Explore all trending apps developed by us</p>
      </div>

      
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <p className="text-xl font-bold">({filteredInstalled.length}) Apps Found</p>
        <select
          className="select select-bordered w-full sm:w-auto"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Sort by Downloads</option>
          <option value="downloads-high-low">High to Low</option>
          <option value="downloads-low-high">Low to High</option>
        </select>
      </div>

      {filteredInstalled.length === 0 && (
        <div className="p-8 text-center text-gray-500 text-4xl">No installed apps</div>
      )}

      {filteredInstalled.map((a) => (
        <div key={a.id} className="flex flex-col mt-3 sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
          
          <img
            src={a.image}
            alt={a.title}
            className="w-16 h-16 rounded-md object-cover"
          />

         
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

          <button className="btn btn-sm mt-2 sm:mt-0 bg-[#00D390] text-white" onClick={() => uninstall(a.id)}>
            Uninstall
          </button>
        </div>
      ))}
    </div>
  )
}
