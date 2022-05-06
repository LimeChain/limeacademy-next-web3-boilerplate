import { supportedMetamaskNetworks } from './constants';
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { walletConnectSupportedNetworks } from "./constants";

export const injected = new InjectedConnector({
  supportedChainIds: supportedMetamaskNetworks,
});

export const walletConnect = (selectedChainId?: number) => {
  return new WalletConnectConnector({
    rpc: {
      [selectedChainId]: walletConnectSupportedNetworks[selectedChainId || 1],
    },
    qrcode: true,
  });
};
