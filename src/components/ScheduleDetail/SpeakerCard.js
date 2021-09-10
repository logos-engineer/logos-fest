import React from 'react'

export default function SpeakerCard() {
    return (
      <div className="flex">
        <div className="w-12 h-12 bg-gray-400 rounded-xl"></div>
        <div className="ml-4">
          <h1 className="text-black-primary font-semibold">John Doe</h1>
          <p className="text-black-body text-sm font-normal">
            Guru Besar Tadika Mesra
          </p>
        </div>
      </div>
    )
}
