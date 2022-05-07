import { getProviders } from "next-auth/react";
import React from "react";
import SignIn from "../../components/SignIn";

function signIn({ providers }) {
    return (
        <div className="signInCard">
            {
                Object.keys(providers).map(provider => {
                    return (
                        <SignIn providerData={providers[provider]} />
                    );
                })
            }
        </div>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    }
}

export default signIn;