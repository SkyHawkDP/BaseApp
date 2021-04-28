import React from 'react';
import { ethers, utils } from "ethers";
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/index';
import IDList from './views/IDList/index';
import StreamCfg from './views/StreamCfg/index';
import StreamCtl from './views/StreamCtl/index';

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
//*let provider
//*window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum))

// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
//* const signer = provider.getSigner()

//* let usr_account;

const Main = () => {
//* loadWallet()

//  Get the balance of an account (by address or ENS name, if supported by network)
//  let balance
//  if(!!usr_account) {
//    balance = getBalancer()  
//    console.log("Bal: %s", balance )
//  }

  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/idlist' component={IDList}></Route>
      <Route exact path='/streamcfg' component={StreamCfg}></Route>
      <Route exact path='/streamctl' component={StreamCtl}></Route>
    </Switch>
  );
}

//async function getBalancer () {
//   let num = 0;
//   num = await provider.getBalance("0x150291F41EdCb67891e09e6Efa93CBeFD0Be5107")
//   return utils.BigNumber.num
//}

//function loadWallet(){
//  signer.getAddress().then(async(res)=>{
//      usr_account = res;
//      await console.log(usr_account);
//  });
//}

export default Main;