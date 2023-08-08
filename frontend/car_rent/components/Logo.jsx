import React from 'react'
import Link from 'next/link'

function Logo() {
  return (
    <Link href="/"><img src="/logo.svg" alt="logo" className='w-[80px] h-[60px] cursor-pointer'/></Link>
  )
}

export default Logo