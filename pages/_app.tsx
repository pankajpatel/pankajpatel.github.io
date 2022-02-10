import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <PlausibleProvider
    domain={"pankaj.pro"}
    customDomain={"https://analytics.t2h.app"}
    trackOutboundLinks={true}
    selfHosted={true}
    enabled={true} // TODO: Add NODE_ENV
  >
    <Component {...pageProps} />
  </PlausibleProvider>
);

export default App;
