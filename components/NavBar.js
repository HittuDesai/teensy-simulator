import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { FaSignOutAlt } from 'react-icons/fa'

function NavBar() {
    const {data: session} = useSession();
    return (
        <nav>
            <div className='left'>
                <div className="open animate">
                    Open Project
                </div>
                <div className="new animate">
                    Create New Project
                </div>
            </div>
            <div className="right">
                <img
                    className="userLogo"
                    src={session.user.image}
                />
                <p className="userName">{session.user.name}</p>
                <FaSignOutAlt onClick={signOut} color='white' className='animate' />
            </div>
        </nav>
    );
}

export default NavBar;