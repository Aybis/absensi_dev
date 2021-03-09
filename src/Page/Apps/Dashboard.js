import React from 'react';
import { ArrowUp, FileText, MoreVertical } from 'react-feather';
import { useLocation } from 'react-router';

const Dashboard =() => {

    let location = useLocation();
    console.log(location.pathname);
        return(
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
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
                    <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                        <div className="flex flex-row justify-between p-4 items-center text-black">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <h3 className="font-bold text-3xl font-body">2622</h3> 
                                    <span className="flex flex-row">
                                        <ArrowUp className="h-4 w-4 text-green-500" />
                                        <p className="text-xs font-bold text-green-500">124</p>
                                    </span>
                                </div>
                                <h3 className="font-bold text-gray-400">Project Done</h3>
                            </div>
                            <span className="h-16 w-16 rounded-lg bg-blue-200 bg-opacity-40 flex items-center justify-center">
                                <FileText className="text-blue-400 h-8 w-8" />
                            </span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                        <div className="flex flex-row justify-between p-4 items-center text-black">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-3xl font-body">2622</h3>
                                <h3 className="font-bold text-gray-400">Project Progress</h3>
                            </div>
                            <span className="h-16 w-16 rounded-lg bg-yellow-200 bg-opacity-40 flex items-center justify-center">
                                <FileText className="text-yellow-400 h-8 w-8" />
                            </span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                        <div className="flex flex-row justify-between p-4 items-center text-black">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-3xl font-body">2622</h3>
                                <h3 className="font-bold text-gray-400">Project Canceled</h3>
                            </div>
                            <span className="h-16 w-16 rounded-lg bg-red-200 bg-opacity-40 flex items-center justify-center">
                                <FileText className="text-red-400 h-8 w-8" />
                            </span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                        <div className="flex flex-row justify-between p-4 items-center text-black">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-3xl font-body">2622</h3>
                                <h3 className="font-bold text-gray-400">Project Amandemen</h3>
                            </div>
                            <span className="h-16 w-16 rounded-lg bg-green-200 bg-opacity-40 flex items-center justify-center">
                                <FileText className="text-green-400 h-8 w-8 " />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-12">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <div className="flex flex-col justify-between px-4 items-center text-black">
                            <div className="flex flex-row justify-between w-full gap-2">
                                <h3 className="font-semibold text-lg text-gray-500">Lorem Ipsum</h3>
                                <MoreVertical />
                            </div>
                            <div className="w-full">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
        )
}

export default  Dashboard;