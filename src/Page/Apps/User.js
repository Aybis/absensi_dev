import React from 'react'
import { useLocation } from 'react-router';


const User = () => {

    const location = useLocation();

    console.log(location.pathname);

    return(
        <div className="h-full px-8">
            <p>AboutMe</p>
        </div>
    )
}

export default User;