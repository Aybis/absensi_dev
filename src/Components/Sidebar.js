import React from 'react'

const Sidebar = () => {
    return (
        <aside className="px-3 bg-gray-200 w-64 ">
            <section className="flex flex-col items-center justify-center py-3 gap-4 mt-12">
                {/* Avatar  */}
                <span className="flex w-14 h-14 rounded-full overflow-hidden items-center">
                <img 
                    src="https://ui-avatars.com/api/?background=0D8ABC&color=fff" 
                    alt="avatar" 
                    className="w-full object-fill rounded-full"  />
                </span>
                {/* Name  */}
                <div className="text-center">
                    <h2 className="text-lg my-0">Aybis </h2>
                    <h3 className="text-gray-600">Administrator</h3>
                </div>

            </section>
        </aside>
    )
}

export default Sidebar;