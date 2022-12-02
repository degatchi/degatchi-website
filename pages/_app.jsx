import "../styles/globals.css";
// import type { AppProps } from "next/app";

// import { Connection } from "../components/Web3Connection/Connection";

// Children inside have server side rendering disabled
// -    next.config.js
function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      {/* <Connection.Provider> */}
        <Component {...pageProps} />
      {/* </Connection.Provider> */}
    </SafeHydrate>
  );
}
export default MyApp;
