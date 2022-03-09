import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initialize, Provider } from "@decentology/hyperverse";
import { networks } from "@decentology/hyperverse";
import { Ethereum } from "@decentology/hyperverse-ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  const hyperverse = initialize({
    blockchain: Ethereum,
    network: networks.Testnet,
    modules: [],
  });
  return (
    <Provider initialState={hyperverse}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
