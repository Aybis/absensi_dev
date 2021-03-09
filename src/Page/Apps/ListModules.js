import React from 'react';
import { Briefcase, FileText, Folder, Map, MapPin, Users } from 'react-feather';
import { useHistory, useLocation, withRouter } from 'react-router-dom';

const ListModules = () => {

    let location = useLocation();
    let history = useHistory();
    let { from } = location.state || { from: { pathname: "/pop" } };

    const onClick = () => {
        console.log(from);
        history.replace(from);
    }

    return(
        <div className="mt-32 flex flex-col gap-8 items-center justify-center px-12">
            <h1 className="text-3xl font-body font-bold text-gray-900">List Modules</h1>
            <div className="grid grid-cols-4 gap-8 p-4 w-full">
                
                <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-orange-100 to bg-orange-200 bg-opacity-50">
                    <div className="h-20 w-20 rounded-full flex items-center justify-center bg-amber-500">
                        <Users className="h-12 w-12 rounded-full text-white" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-body font-semibold">INFOREKAN</p>
                        <p className="text-sm font-body font-light">Modules</p>
                    </div>
                    <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                        <p className="text-lg font-body font-medium">View</p>
                    </button>
                </div>

                <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-emerald-100 to bg-emerald-200 bg-opacity-50">
                    <div className="h-20 w-20 rounded-full flex items-center justify-center bg-emerald-500">
                        <Briefcase className="h-12 w-12  text-white" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-body font-semibold">SPPD</p>
                        <p className="text-sm font-body font-light">Modules</p>
                    </div>
                    <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                        <p className="text-lg font-body font-medium">View</p>
                    </button>
                </div>

                <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-rose-100 to bg-rose-200 bg-opacity-50">
                    <div className="h-20 w-20 rounded-full flex items-center justify-center bg-rose-500">
                        <Map className="h-12 w-12  text-white" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-body font-semibold">CUTI</p>
                        <p className="text-sm font-body font-light">Modules</p>
                    </div>
                    <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                        <p className="text-lg font-body font-medium">View</p>
                    </button>
                </div>

                <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-cyan-100 to bg-cyan-200 bg-opacity-50">
                    <div className="h-20 w-20 rounded-full flex items-center justify-center bg-cyan-500">
                        <MapPin className="h-12 w-12  text-white" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-body font-semibold">POP</p>
                        <p className="text-sm font-body font-light">Modules</p>
                    </div>
                    <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg" onClick={onClick}>
                        <p className="text-lg font-body font-medium">View</p>
                    </button>
                </div>

                <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-violet-100 to bg-violet-200 bg-opacity-50">
                    <div className="h-20 w-20 rounded-full flex items-center justify-center bg-violet-500">
                        <FileText className="h-12 w-12  text-white" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-body font-semibold">SPT</p>
                        <p className="text-sm font-body font-light">Modules</p>
                    </div>
                    <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                        <p className="text-lg font-body font-medium">View</p>
                    </button>
                </div>

                <div className="col-span-1 h-64 rounded-2xl p-4 flex flex-col items-center gap-6 text-coolGray-800 bg-gradient-to-b from-fuchsia-100 to bg-fuchsia-200 bg-opacity-50">
                    <div className="h-20 w-20 rounded-full flex items-center justify-center bg-fuchsia-500">
                        <Folder className="h-12 w-12  text-white" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-body font-semibold">FTP</p>
                        <p className="text-sm font-body font-light">Modules</p>
                    </div>
                    <button className="px-4 py-2 w-full rounded-full bg-white shadow-lg">
                        <p className="text-lg font-body font-medium">View</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ListModules;