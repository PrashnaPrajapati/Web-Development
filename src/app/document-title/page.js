'use client'
import {useEffect, useState} from 'react';

export default function DocumentTitle(){
    const [count, setCount] = useState(0);
    useEffect (() =>{
        console.log("This is from userEffect");
        document.title = `Count: ${count}`;
}, [count]);

return (
    <div>
        <h1>Document Title</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h2>Count: {count}</h2>
    </div>
)
}