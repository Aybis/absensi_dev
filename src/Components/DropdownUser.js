import React from 'react';
import { Briefcase, FileText, Folder, LogOut, Map, MapPin, User, Users } from 'react-feather';
import { Link } from 'react-router-dom';


const DropdownUser = ({noderef}) => {
    return (
        <div ref={noderef}  className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="grid grid-cols-3 gap-4 p-4">
                <Link to="/" className="flex flex-col items-center justify-center text-gray-500 border border-gray-100 rounded-md px-8 py-2 hover:bg-red-600 hover:text-white ease-in-out duration-500 hover:font-bold">
                    <User />
                    <p className="text-xs">Account</p>
                </Link>
                <Link to="/" className="flex flex-col items-center justify-center text-gray-500 border border-gray-100 rounded-md px-8 py-2 hover:bg-red-600 hover:text-white ease-in-out duration-500 hover:font-bold">
                    <Users />
                    <p className="text-xs">Inforekan</p>
                </Link>
                <Link to="/" className="flex flex-col items-center justify-center text-gray-500 border border-gray-100 rounded-md px-8 py-2 hover:bg-red-600 hover:text-white ease-in-out duration-500 hover:font-bold">
                    <Briefcase />
                    <p className="text-xs">SPPD</p>
                </Link>
                <Link to="/" className="flex flex-col items-center justify-center text-gray-500 border border-gray-100 rounded-md px-8 py-2 hover:bg-red-600 hover:text-white ease-in-out duration-500 hover:font-bold">
                    <Map />
                    <p className="text-xs">Cuti</p>
                </Link>
                <Link to="/" className="flex flex-col items-center justify-center text-gray-500 border border-gray-100 rounded-md px-8 py-2 hover:bg-red-600 hover:text-white ease-in-out duration-500 hover:font-bold">
                    <Folder />
                    <p className="text-xs">FTP</p>
                </Link>
                <Link to="/" className="flex flex-col items-center justify-center text-gray-500 border border-gray-100 rounded-md px-8 py-2 hover:bg-red-600 hover:text-white ease-in-out duration-500 hover:font-bold">
                    <MapPin />
                    <p className="text-xs">POP</p>
                </Link>
                <Link to="/" className="flex flex-col items-center justify-center text-gray-500 border border-gray-100 rounded-md px-8 py-2 hover:bg-red-600 hover:text-white ease-in-out duration-500 hover:font-bold">
                    <FileText />
                    <p className="text-xs">SPT</p>
                </Link>
                <Link to="/" className="flex flex-col items-center justify-center text-gray-500 border border-gray-100 rounded-md px-8 py-2 hover:bg-red-600 hover:text-white ease-in-out duration-500 hover:font-bold">
                    <LogOut />
                    <p className="text-xs">Logout</p>
                </Link>
            </div>
        </div>    
    )
}

export default DropdownUser;
