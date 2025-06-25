'use client'
import {useState} from 'react'
export default function StatePage(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>State Page</h1>
            <h2>{count}</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={()=> setCount (count + 1)}
           >Increment</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={()=> setCount (count - 1)}
            >Decrement</button>

            <button className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={()=> setCount (0)}
            >Reset</button>
        </div>

    )
}