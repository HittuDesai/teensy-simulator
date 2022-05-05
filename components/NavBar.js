import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { FaSignOutAlt } from 'react-icons/fa'

function NavBar() {
    const {data: session} = useSession();
    return (
        <nav>
            <div className='left'>
                <div className="open">
                    Open Project
                </div>
                <div className="new">
                    Create New Project
                </div>
            </div>
            <div className="right">
                <img 
                    className="userLogo"
                    src={session.user.image}
                />
                <p className="userName">{session.user.name}</p>
                <FaSignOutAlt className=''/>
            </div>
        </nav>
    );
}

export default NavBar;