import React from 'react'
import { signIn as SignIntoProvider } from "next-auth/react";
import { FaGoogle } from "react-icons/fa"

function SignIn({ providerData }) {
    return (
        <React.Fragment>
            <button onClick={() => {SignIntoProvider(providerData.id, {callbackUrl: '/',})}} className='providerButton animate'>
                <FaGoogle />
                <p className='providerLabel'>Sign In With Google</p>
            </button>
        </React.Fragment>
    );
}

export default SignIn;
