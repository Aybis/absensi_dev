import React from 'react'
import { CSSTransition } from 'react-transition-group';
import DropdownUser from '../DropdownUser';


const Header = ({nodeRef, isDropdown, openDropdownUser, title}) => {
    return (
        <header className="w-full h-24 py-12 px-8 flex justify-between items-center">
        <h1 className="text-2xl text-gray-900 font-semibold">{title}</h1>
        <div className="relative inline-block text-left">
            <div className="flex items-center justify-center h-full">
                <img 
                    src="https://ui-avatars.com/api/?background=0D8ABC&color=fff" 
                    alt="avatar" 
                    onClick={openDropdownUser} 
                    className="h-10 rounded-full cursor-pointer"  />
            </div>
            <CSSTransition
                in={isDropdown}
                timeout={300}
                nodeRef={nodeRef}
                classNames="fade"
                unmountOnExit
                
            >
                <DropdownUser noderef={nodeRef} />
            </CSSTransition>
        </div>                       
    </header>
    )
}

export default Header;