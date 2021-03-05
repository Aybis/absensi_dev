import React from 'react';
import { Link } from 'react-router-dom';


const DropdownUser = ({noderef}) => {
    return (
        <div ref={noderef}  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="p-1  divide-y divide-grau-200" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link to="setting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</Link>
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Profile</Link>
                <form method="POST" action="#">
                    <button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                    Log out
                    </button>
                </form>
            </div>
        </div>    
    )
}

export default DropdownUser;
