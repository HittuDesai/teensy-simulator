import { getProviders, signIn as SignIntoProvider} from "next-auth/react";
import React from "react";

function signIn({ providers }) {
    return (
        <React.Fragment>
        {Object.values(providers).map((provider) => (
            <div key={provider.name}>
            <button onClick={() => SignIntoProvider(provider.id)}>
                Sign in with {provider.name}
            </button>
            </div>
        ))}
        </React.Fragment>
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