import React from 'react'
import { NavLink } from 'react-router-dom'


const NotFound = () => {
 
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <p className="text-8xl text-gray-400">
                404 Not Found.
            </p>
            <NavLink to="/home" className=" text-sm font-bold border-b-2 border-black">Back to Homepage</NavLink>
        </div>
    );
}

export default NotFound;