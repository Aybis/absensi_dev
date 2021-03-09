import React from 'react'
import { BarChart, Grid, Layers, LogOut, Menu, Slack, User } from 'react-feather';
import { Link, NavLink } from 'react-router-dom';


const Sidebar = ({isOpen, openSidebar}) => {
    return (
        <aside className={` hidden lg:block ${isOpen ? 'w-60' : 'w-28'} flex-grow-0 bg-white z-10 py-12 ease-in-out duration-500 border border-gray-100`}>
        <div className="flex flex-col items-center justify-between h-full">
            <div className={`flex items-center w-full h-auto  ${isOpen ? 'justify-end  pr-4 gap-12':'justify-center flex-col gap-4'}`}>
                <div className={`${isOpen ? 'flex': 'hidden'} w-ful items-center`}>
                    <Slack  className=""/>
                    <p className="pl-2 text-lg uppercase font-bold">Apps</p>
                </div>
                {isOpen ? 
                
                    <BarChart className="transform -rotate-90 text-gray-500 cursor-pointer" onClick={openSidebar} />

                :
                    <Menu className={`text-gray-500 cursor-pointer duration-500`} onClick={openSidebar} />
                }
            </div>
            <div className={`flex flex-col items-center w-full ${isOpen ? 'gap-4' : 'gap-6'}`}>
                <NavLink to="/" exact activeClassName="border-r-4 border-red-600 text-red-600 font-bold" className={`flex ${isOpen ? 'flex-row px-8 py-4 text-left gap-4' : 'flex-col'} rounded text-gray-400 gap-2 hover:bg-red-600 hover:text-white p-2 font-semibold items-center duration-500  w-full`}>
                    <Layers />
                    <p className={`${isOpen ? 'text-base' : 'text-xs'}`}>Dashboard</p>
                </NavLink>
                <NavLink to="/apps" activeClassName="border-r-4 border-red-600 text-red-600 font-bold" className={`flex ${isOpen ? 'flex-row px-8 py-4 text-left gap-4' : 'flex-col'} rounded text-gray-400 gap-2 hover:bg-red-600 hover:text-white p-2 font-semibold items-center duration-500  w-full`}>
                    <Grid />
                    <p className={`${isOpen ? 'text-base' : 'text-xs'}`}>Apps</p>
                </NavLink>
                <NavLink to="/me" activeClassName="border-r-4 border-red-600 text-red-600 font-bold" className={`flex ${isOpen ? 'flex-row px-8 py-4 text-left gap-4' : 'flex-col'} rounded text-gray-400 gap-2 hover:bg-red-600 hover:text-white p-2 font-semibold items-center duration-500  w-full`}>
                    <User />
                    <p className={`${isOpen ? 'text-base' : 'text-xs'}`}>Me</p>
                </NavLink>
            </div>
            <div>
                <Link to="/logout" className="flex flex-row items-center gap-2 text-gray-400 hover:bg-red-600 hover:text-white p-2 duration-500  w-full rounded">
                    <LogOut />
                    <p className="text-xs font-semibold">Logout</p>
                </Link>
            </div>
        </div>
    </aside>
    
    )
}

export default Sidebar;