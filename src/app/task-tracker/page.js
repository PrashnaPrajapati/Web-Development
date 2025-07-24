'use client';
import {useState} from 'react';
export default function TaskTracker(){
    const [tasks, setTasks]=useState([]);
    const [newTask, setNewTask]=useState('');
    const createTask = ()=> {
        const newTaskObj ={
            id: tasks.length + 1,
            title: newTask,
        }
        setTasks([...tasks, newTaskObj]);
        setNewTask('');
    }
    return(
        <div className="mt-10 w-1/3 mx-auto text-center">
            <h1 className="text-2xl font-bold">Task Tracker</h1>
            <input type="text" placeholder="Add a task" className="border-2 w-full mt-5 border-gray-300 rounded-md p-2"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            />

            {newTask}


            <button className="bg-blue-500 text-white p-2 rounded-md mx-2 mt-5"
            onClick={createTask}>Add Task</button>

            <ul>
                {tasks.map((task) =>(
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    )
}