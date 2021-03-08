import React, { Component } from 'react'
import { BarChart, DollarSign, FileText, Grid, Home, Layers, LogOut, Menu, Slack, User } from 'react-feather';
import { Link, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import DropdownUser from '../Components/DropdownUser';
import './style.css';
import BGCover from '../assets/png/bg.png';

class Apps extends Component {
    
    constructor() {
        super();
        this.state = {
            isReady : false,
            isLoading: false,
            isOpen: false,
            checkIn: true,
            checkOut: false,
            isDropdown : false,
            nodeRef: React.createRef(),
        }
    }

    openSidebar = () => {
        let isOpen = this.state.isOpen;
        this.setState({
            isOpen : !isOpen,
        })
    }

    openDropdownUser = () => {
        let isDropdown = this.state.isDropdown;
        this.setState({
            isDropdown : !isDropdown,
        })
        console.log('testdorop')
    }
    
    componentDidMount() {
        console.log('did mount');
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    render() {
        return(
            <div className="flex flex-row">
                <aside className={` hidden lg:block ${this.state.isOpen ? 'w-60' : 'w-28'} flex-grow-0 bg-white z-10 py-12 ease-in-out duration-500 border border-gray-100`}>
                    <div className="flex flex-col items-center justify-between h-full">
                        <div className={`flex items-center w-full h-auto  ${this.state.isOpen ? 'justify-end  pr-4 gap-12':'justify-center flex-col gap-4'}`}>
                            <div className={`${this.state.isOpen ? 'flex': 'hidden'} w-ful items-center`}>
                                <Slack  className=""/>
                                <p className="pl-2 text-lg uppercase font-bold">Apps</p>
                            </div>
                            {this.state.isOpen ? 
                            
                                <BarChart className="transform -rotate-90 text-gray-500 cursor-pointer" onClick={this.openSidebar} />

                            :
                                <Menu className={`text-gray-500 cursor-pointer duration-500`} onClick={this.openSidebar} />
                            }
                        </div>
                        <div className={`flex flex-col items-center w-full ${this.state.isOpen ? 'gap-4' : 'gap-6'}`}>
                            <NavLink to="/" activeClassName="border-r-4 border-red-600 text-red-600 font-bold" className={`flex ${this.state.isOpen ? 'flex-row px-8 py-4 text-left gap-4' : 'flex-col'} rounded text-gray-400 gap-2 hover:bg-red-600 hover:text-white p-2 font-semibold items-center duration-500  w-full`}>
                                <Layers />
                                <p className={`${this.state.isOpen ? 'text-base' : 'text-xs'}`}>Dashboard</p>
                            </NavLink>
                            <NavLink to="/apps" activeClassName="border-r-4 border-red-600 text-red-600 font-bold" className={`flex ${this.state.isOpen ? 'flex-row px-8 py-4 text-left gap-4' : 'flex-col'} rounded text-gray-400 gap-2 hover:bg-red-600 hover:text-white p-2 font-semibold items-center duration-500  w-full`}>
                                <Grid />
                                <p className={`${this.state.isOpen ? 'text-base' : 'text-xs'}`}>Apps</p>
                            </NavLink>
                            <NavLink to="/me" activeClassName="border-r-4 border-red-600 text-red-600 font-bold" className={`flex ${this.state.isOpen ? 'flex-row px-8 py-4 text-left gap-4' : 'flex-col'} rounded text-gray-400 gap-2 hover:bg-red-600 hover:text-white p-2 font-semibold items-center duration-500  w-full`}>
                                <User />
                                <p className={`${this.state.isOpen ? 'text-base' : 'text-xs'}`}>Me</p>
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
                
                <aside className="block lg:hidden fixed bottom-0 w-full bg-red-600 h-24 z-50 sm:px-12 md:px-24 ease-in-out duration-500">
                    <div class="flex flex-row items-center justify-between h-full px-16 md:px-24">
                        <Link to="/" class="flex flex-col items-center gap-1">
                            <div class="flex items-center justify-center bg-white rounded-lg shadow-lg h-10 w-10">
                                <Home className="h-6 w-6 text-red-600" />
                            </div>
                            <p class="text-center text-white font-semibold text-sm">Home</p>
                        </Link>    
                        <Link to="/" class="flex flex-col items-center gap-1">
                            <div class="flex items-center justify-center bg-white rounded-lg shadow-lg h-10 w-10">
                                <Grid className="h-6 w-6 text-red-600" />
                            </div>
                            <p class="text-center text-white font-semibold text-sm">Apps</p>
                        </Link>    

                        <Link to="/" class="flex flex-col items-center gap-1">
                            <div class="flex items-center justify-center bg-white rounded-lg shadow-lg h-10 w-10">
                                <User className="h-6 w-6 text-red-600" />
                            </div>
                            <p class="text-center text-white font-semibold text-sm">Me</p>
                        </Link>    

                        <Link to="/" class="flex flex-col items-center gap-1">
                            <div class="flex items-center justify-center bg-white rounded-lg shadow-lg h-10 w-10">
                                <LogOut className="h-6 w-6 text-red-600" />
                            </div>
                            <p class="text-center text-white font-semibold text-sm">Logout</p>
                        </Link>    
                    </div>
                </aside>
                
                <main className="flex-grow flex-auto bg-gray-50 overflow-auto h-screen">
                    <header className="w-full h-24 py-12 px-8 flex justify-between items-center">
                        <h1 className="text-2xl text-gray-900 font-semibold">Home</h1>
                        <div className="relative inline-block text-left">
                            <div className="flex items-center justify-center h-full">
                                <img 
                                    src="https://ui-avatars.com/api/?background=0D8ABC&color=fff" 
                                    alt="avatar" 
                                    onClick={this.openDropdownUser} 
                                    className="h-10 rounded-full cursor-pointer"  />
                            </div>
                            <CSSTransition
                                in={this.state.isDropdown}
                                timeout={300}
                                nodeRef={this.state.nodeRef}
                                classNames="fade"
                                unmountOnExit
                                
                            >
                                <DropdownUser noderef={this.state.nodeRef} />
                            </CSSTransition>
                        </div>                       
                    </header>
                            
                    {/* Content  */}
                    <div className="h-full px-8">
                        <div className="hidden lg:grid">
                            <div className="grid-cols-2">
                                <div className="h-80 w-full bg-cover rounded-lg" style={{ backgroundImage:`url(https://pins.co.id/storage/company/pins_1537549405.jpg)`, top: '80%', transform: 'translate(0,-80%, 0, 0)', backgroundPosition:'center' }}> </div>
                                <div className="bg-gradient-to-r from-black to-white rounded-lg flex-none w-1/2 h-80 -mt-80 opacity-50" ></div>
                            </div>
                            <div className="relative -mt-80 p-10">
                                <h1 className="text-white font-semibold text-2xl">Hi, Abdul Muchtar Astria</h1>
                                <h3 className="overflow-ellipsis w-1/2 overflow-hidden mt-4">Amet est et aliqua tempor ullamco elit excepteur veniam fugiat officia exercitation minim adipisicing aliquip. Ad dolor dolore ad aliquip non tempor non laboris nulla aute ullamco proident Lorem. </h3>
                                <div className="flex flex-row mt-14">
                                    <button className="p-4 bg-red-800 text-white font-semibold rounded-lg">View More</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full lg:mt-24">
                            <h1 className="hidden lg:block">Dashboard</h1>
                            <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                                <div className="bg-white shadow-lg rounded-lg p-4">
                                    <div className="flex flex-row justify-between px-4 items-center text-black">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-semibold text-lg text-gray-500">Done</h3>
                                            <h3 className="font-bold text-xl">2622 doc</h3>
                                            <h3 className="font-semibold text-lg text-gray-500">Project</h3>
                                        </div>
                                        <span>
                                            <FileText className="text-blue-400 h-10 w-10" />
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-white shadow-lg rounded-lg p-4">
                                    <div className="flex flex-row justify-between px-4 items-center text-black">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-semibold text-lg text-gray-500">Progress</h3>
                                            <h3 className="font-bold text-xl">2622 doc</h3>
                                            <h3 className="font-semibold text-lg text-gray-500">Project</h3>
                                        </div>
                                        <span>
                                            <FileText className="text-yellow-400 h-10 w-10" />
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-white shadow-lg rounded-lg p-4">
                                    <div className="flex flex-row justify-between px-4 items-center text-black">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-semibold text-lg text-gray-500">Canceled</h3>
                                            <h3 className="font-bold text-xl">2622 doc</h3>
                                            <h3 className="font-semibold text-lg text-gray-500">Project</h3>
                                        </div>
                                        <span>
                                            <FileText className="text-red-400 h-10 w-10" />
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-white shadow-lg rounded-lg p-4">
                                    <div className="flex flex-row justify-between px-4 items-center text-black">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-semibold text-lg text-gray-500">Amandemen</h3>
                                            <h3 className="font-bold text-xl">2622 doc</h3>
                                            <h3 className="font-semibold text-lg text-gray-500">Project</h3>
                                        </div>
                                        <span>
                                            <FileText className="text-green-400 h-10 w-10" />
                                        </span>
                                    </div>
                                </div>
                            
                        </div>
                        </div>
                       
                    </div>
                </main>
            </div>
        )
    }
}

export default Apps;