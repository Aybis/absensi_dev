import React, { useEffect } from 'react'
import Logo from '../assets/svg/Logo.svg';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    height: '400px'
};

const center = {
    lat:-6.3356113,lng:107.3229187
  }

const Layout = () => {
    
    const [location, setLocation] = React.useState(null);
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
      })
      
    const getLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLocation({lat: position.coords.latitude, lng: position.coords.longitude})
            })
        } else {
             alert('Geolocation is not supported by this browser');
        }
    }

    const onLoadMarker = marker => {
        getLocation();
    }
      
    return(
        <>
            <div className="min-h-screen overflow-auto">
                <nav className="bg-white border-2 border-gray-100 top-0">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 bottom-0 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="w-full flex flex-row justify-between">
                                    {/* Logo  */}
                                    <div className="flex-shrink-0 flex items-center gap-2">
                                        <img src={Logo} className="App-logo" alt="logo" />
                                        <p className="text-xl font-bold font-mono ">POP</p>
                                    </div>

                                    {/* Menu Link  */}
                                    <div className="space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                        <a href={3} className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                            Home
                                        </a>
                                        <a href={3} className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                            Report
                                        </a>
                                        <a href={3} className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>


                <main className="bg-gray-100">
                    <div className="py-12">
                        <div className="bg-white container mx-auto bg-red sm:w-2/6 md:w-2/5 rounded-lg p-8">
                            <div className="flex flex-col justify-between gap-4 mx-4 overflow-y-hidden gap-4">
                                <div className="bg-black h-auto rounded w-auto">
                                {isLoaded ?  
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={10}
                                    >
                                         <Marker
                                            onLoad={onLoadMarker}
                                            position={location}
                                            />
                                    </GoogleMap> : ''}
                                </div>
                                <div className="bg-black h-64 rounded">
                                    
                                </div>
                                <div className="flex flex-row h-auto rounded gap-4">
                                    <select defaultValue={'hadir'} className="block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option value="hadir" >Hadir</option>
                                        <option value="ijin">Ijin</option>
                                        <option value="sakit">Sakit</option>
                                        <option value="sppd">SPPD</option>
                                    </select>
                                    <select defaultValue={'wfo'} className="block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option value="wfo">WFH</option>
                                        <option value="ijin">WFO</option>
                                        <option value="sakit">Satelit</option>
                                    </select>
                                </div>
                                <div className="flex flex-col h-auto rounded gap-4">
                                    <input type="number" className="block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" min="0" placeholder="5 Hari" />
                                    <textarea className="block w-full h-24 bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" placeholder="Sakit ?"></textarea>
                                    <textarea className="block w-full h-24 bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" placeholder="Terlambat ?"></textarea>
                                </div>
                                <div className="flex flex-row h-auto rounded gap-4">
                                    <button className="w-1/2 border-2  border-black h-16 text-lg font-bold font-mono rounded-lg"> Check In</button>
                                    <div className="flex w-1/2 h-16 bg-black items-center justify-center rounded-lg text-center">
                                        <label htmlFor="image" className="text-white text-lg font-bold font-mono cursor-pointer p-4">Take a Selfie</label>
                                        <input type="file" className="hidden" accept="image/*" capture="camera" id="imagenpm i react-google-maps" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Layout;