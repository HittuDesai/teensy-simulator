import React from 'react'
import { useSession } from 'next-auth/react'
import signIn from '../pages/auth/signin';
import NavBar from './NavBar';

function HomePage() {
    const {data: session} = useSession();
    return (
        <React.Fragment>
            { session ? (
                <NavBar />
            ): (
                <signIn />
            )}
        </React.Fragment>
    );
}

export default HomePage;