import React from 'react'

const ButtonCheckInAndOut = ({checkIn, checkOut, onClick}) => {

    const classActive = 'bg-violet-500 w-40 h-12 font-black text-white hover:bg-violet-600';
    const classNotActive = 'bg-gray-200 w-40 rounded-xl h-12 font-black text-gray-400 cursor-default';

    console.log('in',checkIn, 'out',checkOut)
    return (
        <div className="bg-gray-200 rounded-xl">
            <button className={checkIn ? `rounded-l-xl rounded-r-2xl ${classActive}` : `${classNotActive} ease-in-out duration-500`} disabled={!checkIn} onClick={onClick}>
                Check In
            </button>
            <button className={checkOut ? `rounded-l-2xl rounded-r-xl ${classActive} `: `${classNotActive} slideLeft duration-500`} disabled={!checkOut} onClick={onClick}>
                Check Out
            </button>
        </div>
    )
}

export default  ButtonCheckInAndOut;