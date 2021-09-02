import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [authData, setauthData] = useState({
    loggedIn: false,
  })

  const login = () => {
    setauthData({ ...authData, loggedIn: true })
  }

  const logout = () => {
    setauthData({ ...authData, loggedIn: false })
  }

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
