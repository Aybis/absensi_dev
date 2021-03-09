import React, { useState } from 'react'
import { Home, LogOut, User } from 'react-feather';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Apps from '../Page/Apps';


const Anchor = ({type, route, match}) => {
 

    const IconMenu = () => {

        if(type === 'user') {
            return <User />
        } else if(type === 'home'){
            return <Home />
        } else if(type === 'apps'){
            return <Apps />
        } else if(type === 'logout'){
            return <LogOut />
        }
    }

    return (
        <Link to={route} className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center bg-white rounded-lg shadow-lg h-10 w-10">
                <IconMenu  className="h-6 w-6 text-red-600" />
            </div>
            <p className="text-center text-white font-semibold text-sm capitalize">{type}</p>
        </Link>    
    )
}

export default Anchor;