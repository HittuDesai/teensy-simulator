import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/canvas.css'
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
