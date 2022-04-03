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
    scriptProps={{
      src: "https://analytics.t2h.app/js/plausible.js",
      async: true,
      defer: true,
      dataDomain: "pankaj.pro",
    }}
  >
    <Component {...pageProps} />
  </PlausibleProvider>
);

export default App;
