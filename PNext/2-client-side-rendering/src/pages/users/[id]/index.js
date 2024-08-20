import axios from "axios"
import { useRouter } from "next/router"
import React, { useState, useEffect } from 'react'

const UserInfo = () => {

    const [userInfo, setUserInfo] = useState({})
    // initialize router to get the dynamic id 
    const router = useRouter()
    console.log(router.query.id)    // extract dynamic id from router

    useEffect(() => {
        const id = router.query.id;
        axios.get(`https://dummyjson.com/users/${id}`)
            .then((response) => {
                setUserInfo(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [router.query.id])

    // console.log(userInfo.company.name)

    return (
        <>
            <div>UserInfo</div>
            <p>{userInfo.firstName}</p>
            <p>{userInfo.age}</p>
            <p>{userInfo.address && userInfo.address.address}</p>
            <p>{userInfo.company && userInfo.company.name}</p>
        </>
    )
}

export default UserInfo