import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { FaSignOutAlt } from 'react-icons/fa'

function NavBar() {
    const {data: session} = useSession();
    return (
        <div id="nav" className='flex justify-between h-12 bg-gray-700 text-white font-bold px-4'>
            <div id="left" className='flex items-center'>
                <div id="open">
                    <button className='bg-gray-500 rounded h-5/6 px-1'>
                        Open Project
                    </button>
                </div>
                <div id="new">
                    <button className='bg-gray-500 rounded h-5/6 px-1'>
                        Create New Project
                    </button>
                </div>
            </div>
            <div id="right" className='flex items-center'>
                <img 
                    id="userLogo"
                    src={session.user.image}
                    className='h-5/6'
                />
                <p id="userName" className="">{session.user.name}</p>
                <FaSignOutAlt className='h-5/6'/>
            </div>
        </div>
    );
}

export default NavBar;