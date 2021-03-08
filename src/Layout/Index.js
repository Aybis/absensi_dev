import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Components/Header';
import LocationSvg from '../assets/svg/Location.svg'
import TravellerSvg from '../assets/svg/Travellers.svg'
import './styles.css';
import { MoreVertical, UserCheck } from 'react-feather';
import AvatarPng from '../assets/png/avatar.png'
import ButtonCheckInAndOut from '../Components/ButtonCheckInAndOut';
class Layout extends Component {

    constructor() {
        super();
        this.state = {
            isReady : false,
            isLoading: false,
            isModal: false,
            checkIn: true,
            checkOut: false,
            nodeRef: React.createRef(),
        }
    }
    
    openModal = () => {
        let isModal = this.state.isModal;
        this.setState({isModal: !isModal})
    }

    closeModal = () => {
        let isModal = this.state.isModal;
        this.setState({isModal: !isModal})
    }

    onCheckInAndOut = () => {
        let checkIn = this.state.checkIn;
        let checkOut = this.state.checkOut;

        this.setState(
            {
                checkIn : !checkIn,
                checkOut : !checkOut,
            }
        )

    }

    componentDidMount() {
        console.log('did mount');
    }

    componentWillUnmount() {
        console.log('will unmount');
    }


    render() {
        return (
            <>
               <Header />
                <main className="container mx-auto w-full  px-24 py-12">      

                    {/* Title and Navbar */}
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="text-2xl font-semibold font text-coolGray-900 text-left">Home</h1>
                        {/* Breadcumbs */}
                        <nav>
                            <ol className="list-reset pl-4 rounded flex text-grey">
                                <li className="px-2">
                                    <NavLink 
                                        to="/" 
                                        exact 
                                        className="font-semibold text-gray-800"  
                                        activeClassName="text-gray-300 cursor-not-allowed"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>/</li>
                                
                            </ol>
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="pt-12 px-4">
                        {/* Grid */}
                        <div className="grid grid-cols-4 grid-flow-row gap-8">
                            {/* Col Span 1 */}
                            <div className="bg-white shadow-lg rounded-lg col-span-1 row-start-1 row-end-2">
                                <div className="flex flex-col items-center gap-8 p-4">
                                    <span className="h-32 w-32 rounded-full bg-lime-200">
                                        <img src={AvatarPng} alt="img" className="object-cover h-32 w-32 rounded-full" />
                                    </span>
                                    <div className="flex flex-col text-center text-gray-800 gap-2 ">
                                        <p className="text-sm">Welcome Back.</p>
                                        <h3 className="font-bold text-lg ">Abdul Muchtar Astria</h3>
                                    </div>
                                    <button className="block bg-blue-300 text-white w-full h-12 rounded-full font-semibold">
                                        View Profile
                                    </button>
                                </div>
                            </div> 

                            {/* Col Span 4 */}
                            <div className="flex bg-blue-300 shadow-lg rounded-lg col-span-5 col-start-2 col-end-5 row-start-1 row-end-2 px-8 items-center">
                                <div className="flex flex-row items-center gap-4">
                                    <div className=" flex flex-col gap-20">
                                        <h1 className="text-3xl text-gray-800 font-semibold">
                                            Hey, don't forget to attend every day.
                                            so I can pay attention to you
                                        </h1>
                                        <div className="flex items-center">
                                            <ButtonCheckInAndOut checkIn={this.state.checkIn} checkOut={this.state.checkOut} onClick={this.onCheckInAndOut} />
                                            <p className="inline-block pl-12 text-gray-500">Jumat, 24 January 2021 / 07:14 AM</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col bg-white h-60 w-60 items-center justify-center rounded-xl p-4 gap-4">
                                        <img src={LocationSvg} alt="img" className="object-fit" />
                                        <p className="text-left text-md font-bold">Check in wherever you are</p>
                                    </div>
                                </div>
                            </div> 

                            <div className="border-2 border-gray-200 rounded-lg p-4 ">
                                <h3 className="text-xl font-bold text-center"> Attendance</h3>
                                <div className="flex flex-row mx-8 gap-8 mt-8 items-center justify-center">
                                    <span className="h-14 w-14 rounded-full bg-blue-600 items-center flex justify-center">
                                        <UserCheck className="h-8 w-8 text-white" />
                                    </span>
                                    <div>
                                        <h3 className="text-4xl font-bold">184</h3>
                                        <h4 className="text-sm font-semibold text-gray-400">Employee</h4>
                                    </div>
                                </div>
                            </div>


                            <div className="border-2 border-gray-200 rounded-lg p-4 ">
                                <h3 className="text-xl font-bold text-center">Yet Attendance</h3>
                                <div className="flex flex-row mx-8 gap-8 mt-8 items-center justify-center">
                                    <span className="h-14 w-14 rounded-full bg-blue-600 items-center flex justify-center">
                                        <UserCheck className="h-8 w-8 text-white" />
                                    </span>
                                    <div>
                                        <h3 className="text-4xl font-bold">184</h3>
                                        <h4 className="text-sm font-semibold text-gray-400">Employee</h4>
                                    </div>
                                </div>
                            </div>


                            <div className="border-2 border-gray-200 rounded-lg p-4 ">
                                <h3 className="text-xl font-bold text-center">Sick</h3>
                                <div className="flex flex-row mx-8 gap-8 mt-8 items-center justify-center">
                                    <span className="h-14 w-14 rounded-full bg-blue-600 items-center flex justify-center">
                                        <UserCheck className="h-8 w-8 text-white" />
                                    </span>
                                    <div>
                                        <h3 className="text-4xl font-bold">184</h3>
                                        <h4 className="text-sm font-semibold text-gray-400">Employee</h4>
                                    </div>
                                </div>
                            </div>


                            <div className="border-2 border-gray-200 rounded-lg p-4 ">
                                <h3 className="text-xl font-bold text-center">On Duty</h3>
                                <div className="flex flex-row mx-8 gap-8 mt-8 items-center justify-center">
                                    <span className="h-14 w-14 rounded-full bg-blue-600 items-center flex justify-center">
                                        <UserCheck className="h-8 w-8 text-white" />
                                    </span>
                                    <div>
                                        <h3 className="text-4xl font-bold">184</h3>
                                        <h4 className="text-sm font-semibold text-gray-400">Employee</h4>
                                    </div>
                                </div>
                            </div>

                              {/* Col Span 1 */}
                              <div className="bg-gradient-to-br from-blueGray-100  to-lightBlue-400 rounded-lg row-start-3">
                                <div className="flex flex-col items-center gap-16 p-4 justify-between">
                                    <span className="h-40 w-40 rounded-full bg-amber-300 pt-8">
                                        <img src={TravellerSvg} alt="img" />
                                    </span>                                    
                                    <h1 className="font-bold text-xl text-white mt-12">It's time for the holidays</h1>         
                                    <button className="block bg-white text-gray-800 w-full h-12 rounded-full font-semibold -mt-6">
                                        View Detail
                                    </button>                                                         
                                </div>
                            </div> 

                            <div className="bg-white shadow row-start-3 col-span-3 rounded-lg border-2 border-gray-100">
                                <div className="flex flex-row items-center justify-between p-4">
                                    <h4 className="text-lg font-semibold text-gray-600">Day Off</h4>
                                    <MoreVertical className="cursor-pointer" />
                                </div>
                                <div className="p-4">
                                    <table className="table-fixed w-full">
                                        <thead>
                                            <tr className="bg-blue-50 text-gray-500 font-bold text-left h-12">
                                                <th className="text-center rounded-l-md">Date</th>
                                                <th>Month</th>
                                                <th>Category</th>
                                                <th>Description</th>
                                                <th className="rounded-r-md text-center">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="font-semibold text-left">
                                                <td>
                                                    <div className="px-4 pt-4 text-center">
                                                        <h1 className="text-2xl text-center font-bold">11</h1>
                                                        <p className="text-gray-500">Kamis</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>Maret</p>
                                                </td>
                                                <td>
                                                    <p>Libur</p>
                                                </td>
                                                <td className="overflow-ellipsis">
                                                    <p>Hari Isra Mira'j Nabi Muhammad</p>
                                                </td>
                                                <td className="text-center">
                                                    <p className="text-blue-400">Available</p>
                                                </td>
                                            </tr>
                                            <tr className="font-semibold text-left text-gray-400">
                                                <td>
                                                    <div className="px-4 pt-4  text-center">
                                                        <h1 className="text-2xl text-center font-bold">12</h1>
                                                        <p className="text-gray-500">Jumat</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>Maret</p>
                                                </td>
                                                <td>
                                                    <p>Cuti Bersama</p>
                                                </td>
                                                <td className="overflow-ellipsis">
                                                    <p>Cuti Bersama Isra Mira'j Nabi Muhammad </p>
                                                </td>
                                                <td className="text-center">
                                                    <p className="text-red-400">Canceled</p>
                                                </td>
                                            </tr>
                                            <tr className="font-bold text-left">
                                                <td>
                                                    <div className="px-4 pt-4  text-center">
                                                        <h1 className="text-2xl text-center font-bold">12</h1>
                                                        <p className="text-gray-500">Rabu</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>Mei</p>
                                                </td>
                                                <td>
                                                    <p>Libur</p>
                                                </td>
                                                <td className="overflow-ellipsis">
                                                    <p>Libur Hari Raya Idul Fitri </p>
                                                </td>
                                                <td className="text-center">
                                                    <p className="text-blue-400">Available</p>                                                
                                                </td>
                                            </tr>
                                            <tr className="font-bold text-left">
                                                <td>
                                                    <div className="px-4 pt-4  text-center">
                                                        <h1 className="text-2xl text-center font-bold">13</h1>
                                                        <p className="text-gray-500">Kamis</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>Mei</p>
                                                </td>
                                                <td>
                                                    <p>Libur</p>
                                                </td>
                                                <td className="overflow-ellipsis">
                                                    <p>Libur Hari Raya Idul Fitri </p>
                                                </td>
                                                <td className="text-center">
                                                    <p className="text-blue-400">Available</p>                                                
                                                </td>
                                            </tr>
                                            <tr className="font-bold text-left">
                                                <td>
                                                    <div className="px-4 pt-4  text-center">
                                                        <h1 className="text-2xl text-center font-bold">14</h1>
                                                        <p className="text-gray-500">Jumat</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>Mei</p>
                                                </td>
                                                <td>
                                                    <p>Libur</p>
                                                </td>
                                                <td className="overflow-ellipsis">
                                                    <p>Libur Hari Raya Idul Fitri </p>
                                                </td>
                                                <td className="text-center">
                                                    <p className="text-blue-400">Available</p>                                                
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                



                        </div>    {/* End Grid */}
            
                    </div>
                </main>
            </>
        )
    }
}

export default Layout
