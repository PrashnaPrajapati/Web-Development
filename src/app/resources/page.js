'use client'

import {useEffect, useState} from 'react'
export default function Resources(){
    const [users, setUsers] = useState([]);
    const [resourceType, setResourceType] = useState('users');
    useEffect (() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(res => res.json())
        .then(data => setUsers(data))
    })
    return (
        <div>
            <h1>Resources</h1>

            <button className="bg-blue-500 text-white p-2 rounded-md mx-2"
            onClick={() => setResourceType('users')}>Users</button>

            <button className="bg-blue-500 text-white p-2 rounded-md mx-2"
            onClick={() => setResourceType('posts')}>Posts</button>

            <button className="bg-blue-500 text-white p-2 rounded-md mx-2"
            onClick={() => setResourceType('comments')}>Comments</button>

            <br/>
            <h1>Resource Type: {resourceType}</h1>
            {JSON.stringify(Resources)}

            <ul className="w-1/3 mx-auto">
                {users.map((user) => (
                    <li className="bg-gray-100 p-4 rounded-md my-1"
                    key={user.id}
                    >
                        <header>
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        </header>
                        
                        <p className="text-gray-500">{user.email}</p>
                        </li>
                ))}
                    
                    </ul> 
        </div>
    )
    
}