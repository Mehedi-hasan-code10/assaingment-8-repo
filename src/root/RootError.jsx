import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function RootError(){
  const err = useRouteError()
  console.error(err)
  return (
    <div className="p-16 text-center w-full  flex flex-col justify-center items-center">
      {/* <h1 className="text-3xl font-bold">Something went wrong</h1> */}
      <img src='/App-Error.png' alt="App Error" className="w-64 h-64 mx-auto mb-4" />
      <p className="mt-4 font-bold text-3xl">Error {err.statusText || err.message || 'App Not Founded'}</p>
      <Link to="/" className="btn mt-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Home</Link>
    </div>
  )
}
