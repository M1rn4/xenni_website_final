import React from 'react'
import logoImage from '../assets/logo.png'

export default function BrandLogo({ light = false }) {
  return (
    <div className="inline-flex items-center gap-3" aria-label="Xenni">
      <span
        className="h-11 w-11 rounded-xl bg-slate-800 bg-no-repeat shadow-sm"
        style={{
          backgroundImage: `url(${logoImage})`,
          backgroundPosition: 'left center',
          backgroundSize: '112px 112px',
        }}
        aria-hidden="true"
      />
      <span className={`text-3xl font-semibold tracking-normal ${light ? 'text-white' : 'text-slate-800'}`}>
        xenni
      </span>
    </div>
  )
}
