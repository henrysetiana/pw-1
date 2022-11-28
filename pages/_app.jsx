import '../styles/globals.css'
import {UserNameProvider} from "../src/hooks/useUserName";
import {FrameTickerProvider} from "../src/hooks/useFrameTicker";

function MyApp({ Component, pageProps }) {

  return <UserNameProvider>
    <FrameTickerProvider>
      <Component {...pageProps} />
    </FrameTickerProvider>
  </UserNameProvider>
}

export default MyApp
