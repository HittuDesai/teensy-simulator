import React from 'react'
import { useSession } from 'next-auth/react'
import NavBar from './NavBar';
import MainCanvas from './MainCanvas';

function HomePage() {
    const {data: session} = useSession();
    return (
        <React.Fragment>
            { session ? (
                <React.Fragment>
                    <NavBar />
                    <MainCanvas />
                </React.Fragment>
            ): (
                <signIn />
            )}
        </React.Fragment>
    );
}

export default HomePage;