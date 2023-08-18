import Link from 'next/link'
import React from 'react'
import { bestSellers } from '@/utils/data'
import { useRouter } from 'next/router'

function DashboardHeader() {
  const router = useRouter()
  const { id } = router.query
  const user = bestSellers[id]
  return (
    <header
    className=' flex p-3 px-6 absolute top-0 left-0 right-0 '
    >
        {user && (
          <Link
          href={`/renters/${id}`}
          className='flex gap-10 items-center'
          >
            <img src={user.image} alt={user.name} 
                className='w-[70px] h-[70px] object-cover rounded-full'
            />
            <h1
            className='font-semibold'
            >
                {user.name}
            </h1>
          </Link>
        )}
    </header>
  )
}

export default DashboardHeader  //导出组件