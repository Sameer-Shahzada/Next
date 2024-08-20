import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import useSWR from 'swr'

// use SWR instead of axios here
const fetcher = (...args) => fetch(...args).then(res => res.json())

const Users = () => {

    const { data, error } = useSWR('https://dummyjson.com/users', fetcher)

    console.log(data && data.users)

    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     axios.get('https://dummyjson.com/users')
    //         .then((response) => {
    //             setUsers(response.data.users)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    if(error) {
        return <h1>Error Occured</h1>
    }

    if(!data) return <h1>...loading</h1>

    return (
        <>
            <div>Users</div>
            <ul>{data && data.users.map((user, index) => {
                return (
                    <Link href={`/users/${user.id}`} key={index}>
                        <li>
                            {user.firstName}
                        </li>
                    </Link>
                )
            })}</ul>
        </>
    )
}

export default Users