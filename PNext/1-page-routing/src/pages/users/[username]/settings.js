import React from 'react'
import { useRouter } from 'next/router'
const SettingPage = () => {
  const router = useRouter()
  console.log(router)
  return (
    <>
      <div>This is the SettingPage for {router.query.username}</div>
      <div className='flex justify-evenly'>
        <button className='bg-purple-500 rounded p-2' onClick={(e) => router.push(`/users/${router.query.username}`)}>Back to user Page</button>
        {/* router.replace() is used to push the user on another page without creating its history on browser it is useful 
        when you are loging in website & you dont want to user back by hit back button  */}
        <button className='bg-red-500 rounded p-2' onClick={(e) => router.replace('/')}> Back to Home</button>
      </div>

    </>
  )
}

export default SettingPage