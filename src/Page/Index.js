import React from 'react';
import Sidebar from '../Components/Sidebar';

const Index = () => {

    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <main>
                <p>Test</p>
            </main>
        </div>
    );
}

export default Index;