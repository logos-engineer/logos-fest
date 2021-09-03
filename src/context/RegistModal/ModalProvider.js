import { createContext, useState } from 'react'

export const ModalContext = createContext()
export default function ModalProvider({ children }) {
  const [modalView, setmodalView] = useState(false)
  return (
    <ModalContext.Provider value={{ modalView, setmodalView }}>
      {children}
    </ModalContext.Provider>
  )
}
