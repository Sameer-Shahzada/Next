import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import nextImage from '../../../../public/next.svg'
import Link from 'next/link'
const UsersPage = () => {
  const router = useRouter()
  console.log(router)

  // create a custom hook 
  const useUser = () => ({
    // user: null, 
    user: { name: 'Sameer' }, // this is the hardcoded value here, This value comes should be from database or api
    loading: false,

  })

  // initialize useUser custom hook 
  const user = useUser();

  useEffect(() => {
    if (user.user == null) {
      router.replace('/')
    }
  }, [router, user.user])

  return (
    <>
      <div>This is the {router.query.username} user page</div>
      <div>
      {/* <Link href='#'>

      <Image style={{ background:'#fff'}} src={nextImage} alt='hello' width='200' height='200' layout='responsive' objectFit='cover' />
      </Link> */}

      </div>
      {/* 1st way to push user on another page by using router.push */}
      {/* <button className='bg-cyan-500 rounded p-2' onClick={(event) => router.push(`/users/${router.query.username}/settings`) }>Open Settings</button> */}
      {/* 2nd way to push user on anohter page by using router.push */}
      <div className='flex justify-evenly'>
        <button className='bg-cyan-500 rounded p-2' onClick={(event) => router.push({
          pathname: '[username]/settings',
          query: { username: router.query.username }
        })}>Open Settings</button>

        {/* to reload the page  */}
        <button className='bg-green-500 rounded p-2' onClick={(e) => router.reload()}>Reload</button>
      </div>


    </>
  )
}

export default UsersPage