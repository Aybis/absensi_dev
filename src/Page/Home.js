import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Header from '../Components/Header';
import './style.css';

const Home = () => {

    //Long Lat Jakarta
    const DEFAULT_LONGITUDE =111.00474000;
    const DEFAULT_LATITUDE = -6.58227000;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('http://apps.iconpln.co.id:7181/Panas-1.0/AssetGarduAllRf')
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setDatas(result.listAsset);
        }, (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, [])


    return (
        <div className="overflow-auto bg-gray-100">
           <Header />
           <div className="py-12 container mx-auto">
               <p className="text-black text-lg font-semibold mb-4">Dashboard</p>
                <div className="grid grid-flow-col grid-cols-2 gap-4">

                    <div className="flex flex-col gap-4 bg-white h-auto rounded-lg shadow-xl p-4 transition duration-300 
                    ease-in-out">
                        <div className="flex flex-row w-full text-right justify-between p-2">
                            <p className="font-medium t ext-lg leading-5 text-gray-500">Maps</p>
                            <button 
                            className="shadow rounded p-2 transition duration-300 ease-in-out font-medium leading-5 text-gray-500 hover:bg-green-400 hover:text-gray-100">Full View</button>
                        </div>
                        {error ? <p className="text-red-400 font-semibold">{error.message}</p> : 
                            <MapContainer center={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]} zoom={13} scrollWheelZoom={true}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                    {!isLoaded ? '' : datas.slice(0,90).map((data, index) => (
                                            <Marker key={index} position={[data.x, data.y]}>
                                                <Popup>
                                                {data.coverage}. 
                                                </Popup>
                                            </Marker>
                                        ))
                                    }                            
                            </MapContainer>             
                        }
                    
                    </div>
                    <div className="flex flex-col gap-4 bg-white h-auto rounded-lg shadow-xl p-4 transition duration-300 ease-in-out">
                        <div className="flex flex-row w-full text-right justify-between p-2">
                            <p className="font-medium text-lg leading-5 text-gray-500">Dashboard</p>
                            <button 
                            className="shadow rounded p-2 transition duration-300 ease-in-out font-medium leading-5 text-gray-500 hover:bg-green-400 hover:text-gray-100" onClick={() => console.log('test')}>Full View</button>
                        </div>
                    </div>
                </div>
             
           </div>
        </div>
    );
}

export default Home;