import React from 'react'

export default function Loading(){
  return (
    <div className="flex items-center justify-center py-10">
      <div className="radial-progress" style={{"--value":70}}>Loading</div>
    </div>
  )
}
