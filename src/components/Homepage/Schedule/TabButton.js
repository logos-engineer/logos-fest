import React from 'react'

export default function TabButton({ selected, children }) {
  return (
    <button
      className={clsx(
        'mx-3 px-3 py-2 rounded-full transition-all lg:px-5 lg:py-3 lg:rounded-md',
        selected
          ? 'bg-pink-500 text-white'
          : 'bg-white text-black-primary opacity-40'
      )}
    >
      {children}
    </button>
  )
}
