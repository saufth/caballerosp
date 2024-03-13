import React from 'react'
import { Icons } from '@/components/icons'

export default function Background ({ children }: React.PropsWithChildren) {
  return (
    <div className='relative z-20 overflow-hidden'>
      {children}
      <div className='absolute inset-0 -z-10'>
        <Icons.Logomark className='absolute top-gutter right-gutter fill-accent w-screen 2xl:w-[60vw] h-auto opacity-10' />
        <Icons.Logomark className='absolute bottom-gutter left-gutter fill-accent w-screen 2xl:w-[60vw] h-auto opacity-10' />
      </div>
    </div>
  )
}
