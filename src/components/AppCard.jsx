import React from 'react'
import { Link } from 'react-router-dom'

export default function AppCard({ app }){
  return (
    <Link to={`/apps/${app.id}`} className="card card-compact bg-base-100 shadow
     hover:shadow-lg">
      <figure>
        <img
          src={app.image}
          alt={app.title}
          className="w-8/12 object-cover"
        />
        
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title text-sm">{app.title}</h2>
        <p className="text-xs">{app.companyName}</p>
        <div className="flex justify-between items-center mt-2 text-xs">
          <span>{app.downloads.toLocaleString()} downloads</span>
          <span>⭐ {app.ratingAvg}</span>
        </div>
      </div>
    </Link>
  )
}
