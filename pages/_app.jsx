import '../styles/globals.css'
import {UserNameProvider} from "../src/hooks/useUserName";

function MyApp({ Component, pageProps }) {

  return <UserNameProvider>
    <Component {...pageProps} />
  </UserNameProvider>
}

export default MyApp
