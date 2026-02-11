
import type { LoaderAuth } from '@/types/interface/components/loaderComponents'
import { Loader } from 'lucide-react'
import React from 'react'

function AuthLoader({color, thickness, size}:LoaderAuth) {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <Loader className={`size-${size} text-${color}-${thickness} animate-spin`} />
    </div>
  )
}

export default AuthLoader

