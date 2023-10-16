import React from 'react'

export default function Dvider({title}) {
  return (
    <div className="relative">
        {/* divider */}
        <div className="absolute inset-0 flex items-center">
          <div className="border border-slate-200 w-9/12 mx-auto"></div>
        </div>
        {/* text */}
        <div className="flex justify-center over relative">
          <div className="font-display text-4xl text-slate-600 px-4 bg-white">
            {title}
          </div>
        </div>
      </div>
  )
}
