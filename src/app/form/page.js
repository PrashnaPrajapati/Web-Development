'use client'
import {useState} from 'react';

export default function FormPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return(
        <div>
            <h1> Live Form Input</h1>
            <input type="text"  
            className="border-2 border-gray-300" 
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}/>
            {name && <h2>Name: {name}</h2>}
            <br></br>

            
            <input type="text"  
            className="border-2 border-gray-300" 
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}/>
            {email && <h2>Email: {email}</h2>}
        </div>
    )
}