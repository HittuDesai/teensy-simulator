import React from 'react'
import { useSession } from 'next-auth/react'
import NavBar from './NavBar';
import MainCanvas from './MainCanvas';
import Link from 'next/link';
import { FcElectricity } from 'react-icons/fc'

function HomePage() {
    const {data: session} = useSession();
    console.log(session?.user?.email)
    return (
        <React.Fragment>
            { session ? (
                <React.Fragment>
                    <NavBar />
                    <MainCanvas />
                </React.Fragment>
            ): (
                <div className='outerDiv'>
                    <div className='youHaveNotSignedIn'>
                        <p className='firstLine'>You are not signed into an account</p>
                        <p className='secondLine'>Sign in to create and save your designs</p>
                        <FcElectricity className='appLogo'/>
                        <Link href="/auth/signin">
                            <button className='signInNowButton animate'>Sign In Now</button>
                        </Link>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default HomePage;