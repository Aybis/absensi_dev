import React from 'react'
import { Link } from 'react-router-dom';


const SidebarMobile = () => {
    return (
        <aside className="block lg:hidden fixed bottom-0 w-full bg-red-600 h-24 z-50 sm:px-12 md:px-24 ease-in-out duration-500">
            <div className="flex flex-row items-center justify-between h-full px-16 md:px-24">
               <Link to="/">Home</Link>
               <Link to="/apps">Apps</Link>
               <Link to="/me">Me</Link>
               <Link to="/">Logout</Link>
            </div>
        </aside>
    )
}

export default SidebarMobile;