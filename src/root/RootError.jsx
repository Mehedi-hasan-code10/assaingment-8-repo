import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function RootError(){
  const err = useRouteError()
  console.error(err)
  return (
    <div className="p-16 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-4">Router error: {err.statusText || err.message || 'Unknown error'}</p>
      <Link to="/" className="btn mt-6">Go Home</Link>
    </div>
  )
}
