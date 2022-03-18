import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initialize, Provider, Network } from "@decentology/hyperverse";
import { Ethereum } from "@decentology/hyperverse-ethereum";
// import { Metis } from '@decentology/hyperverse-metis';
// import { Flow } from '@decentology/hyperverse-flow';
// import { Algorand } from '@decentology/hyperverse-algorand';

function MyApp({ Component, pageProps }: AppProps) {
  const hyperverse = initialize({
    blockchain: Ethereum,
    network: Network.Testnet,
    modules: [],
  });
  return (
    <Provider initialState={hyperverse}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
