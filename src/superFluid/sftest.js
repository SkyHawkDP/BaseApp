const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const { Web3Provider } = require("@ethersproject/providers");

const sf = new SuperfluidSDK.Framework({
    ethers: new Web3Provider(window.ethereum)
});

let walletAddress, eth_accounts

async function sfinit () {
    await sf.initialize()
    console.log("Aftr sf await")
    getAccount()
    return sf
}

async function getAccount () {
    walletAddress = await window.ethereum.request({
    method: 'eth_requestAccounts',
    params: [
      {
        eth_accounts: {}
      }
    ]
  });
  console.log(eth_accounts)

  return eth_accounts
}
      
//  const carol = sf.user({
//      address: walletAddress[0],
//      token: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00'
//  });

module.exports.getAccount = getAccount
module.exports.sfinit = sfinit