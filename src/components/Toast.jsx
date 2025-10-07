import React from 'react'

export default function Toast({ message }){
  if(!message) return null
  return (
    <div className="fixed top-4 right-4 alert alert-success">
      <div>
        <span>{message}</span>
      </div>
    </div>
  )
}
