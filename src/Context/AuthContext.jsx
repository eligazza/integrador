import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { users } from "../dataTest/data"
import {CircularProgress} from "@nextui-org/react";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // Buscar el usuario en el array "users" por correo electrónico
        const matchingUser = users.find(u => u.email === user.email);
        
        if (matchingUser) {
          user.role = matchingUser.role; // Agregar el campo "role" desde "users"
        }
        else {
          user.role = 'user'
        }
      }
      
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading ? (children):(
      <div className=" h-screen flex flex-col justify-center items-center">
        <img
        alt="Logo"
        src="/images/Logo.png"
        className="object-fit w-3/5"
        />

        <CircularProgress size="lg" aria-label="Loading..."/>
      </div>
      
      
      )}
    </AuthContext.Provider>
  )
}