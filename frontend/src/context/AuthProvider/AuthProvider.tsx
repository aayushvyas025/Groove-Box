import { useAuthProvider } from '@/hooks/useAuthProvider/useAuthProvider'
import React from 'react'

function AuthProvider() {
    const {userId, loading} = useAuthProvider(); 

    if(loading) {
        return <h2></h2>
    }

  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider