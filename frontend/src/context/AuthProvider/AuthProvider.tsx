import { useAuthProvider } from '@/hooks/useAuthProvider/useAuthProvider'
import React from 'react'

function AuthProvider() {
    const {userId, loading} = useAuthProvider(); 

    

  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider