import { ethers } from "ethers";


function useWallet () {
    let provider
    window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum))
 
    return provider.getSigner()
  }

export default useWallet