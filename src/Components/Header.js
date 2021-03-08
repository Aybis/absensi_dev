import React, { useRef, useState } from 'react';
import { Maximize } from 'react-feather';
import { Link, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import DropdownUser from './DropdownUser';
import './Header.css';


const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const [hover, setHover] = useState(false);
    const nodeRef = useRef(null);
    const classActive = 'px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium text-gray-900';
    const classHover = 'hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out';

    const onHover = () => {
        setHover(!hover);
    };

    const onClick = () => {
        setDropdown(!dropdown);
    };


    return (
        <header className="bg-white border-2 border-gray-100 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 bottom-0 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="w-full flex flex-row justify-between">
                    {/* Logo  */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        <Maximize />
                        <p className="text-xl font-bold font-mono ">POP</p>
                    </Link>

                    {/* Menu Link  */}
                    <div className="space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink 
                            to="/" 
                            className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 ${hover ? classHover : ''}`} 
                            activeClassName={classActive}
                            onMouseEnter={onHover}
                            exact={true}
                            >
                                Home
                        </NavLink>
                        <NavLink 
                            to="/report" 
                            className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 ${hover ? classHover : ''}`} 
                            activeClassName={classActive}
                            onMouseEnter={onHover}
                            >
                                Report
                        </NavLink>
                        <div className="relative inline-block text-left">
                            <div className="flex items-center justify-center h-full">
                                <img 
                                    src="https://ui-avatars.com/api/?background=0D8ABC&color=fff" 
                                    alt="avatar" 
                                    onClick={onClick} 
                                    className="h-10 rounded-full cursor-pointer"  />
                            </div>
                            <CSSTransition
                                in={dropdown}
                                timeout={300}
                                nodeRef={nodeRef}
                                classNames="fade"
                                unmountOnExit
                                
                            >
                                <DropdownUser noderef={nodeRef} />
                            </CSSTransition>
                        </div>                       
                    </div>  {/* End Menu  */}
                </div> {/**End  */}
            </div> {/**End  */}
        </div> {/**End */}
    </header> 
    );
}


export default Header;