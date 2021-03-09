import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
 
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <p className="text-8xl text-gray-400">
                404 Not Found.
            </p>
            <Link to="/" className=" text-sm font-bold border-b-2 border-black">Back to Homepage</Link>
        </div>
    );
}

export default NotFound;