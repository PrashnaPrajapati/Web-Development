'use client'

import {useEffect, useState} from 'react'
export default function Resources(){
    const [users, setUsers] = useState([]);
    useEffect (() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    })
    return (
        <div>
            <h1>Resources</h1>
            {JSON.stringify(users)}
        </div>
    )
    
}