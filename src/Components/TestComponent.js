import React from 'react'


const TestComponent = ({children, title}) => {
    return (
        <div className="bg-rose-500 h-screen">
            <h1 className="text-lg text-gray-800">{title}</h1>
                {children}
        </div>
    )
}
export default TestComponent;