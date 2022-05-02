import { getProviders, signIn as SignIntoProvider} from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa"

function signIn({ providers }) {
    return (
        <div id='signInCard' className=''>
            <p id='firstLine'>You are not signed into an account</p>
            <p id='secondLine'>Sign in to create and save your designs</p>
            <button id='signInWithGoogle' onClick={() => {SignIntoProvider("google")}} className=''>
                <FaGoogle />
                <p id='googleSignIn'>Sign In With Google</p>
            </button>
        </div>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    // console.log(providers);
    return {
        props: {
            providers,
        },
    }
}

export default signIn;