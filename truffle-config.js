require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember smile good kitten sun giggle'; 
let testAccounts = [
"0x79f0ccd36ea2cb502c097b738c52906706e9091d798dc778e9a81c92331d14fe",
"0xf7aae0543cfeb407360177502923a366a3b040f1dd99babdc3223ddfd7c3010e",
"0x5c2c6b1b301fb427b362cb80bad3de5ac1a238b441c22086e136a88ef5b41686",
"0x8684492181a4a7bcd505da935bdd8f2ff26079ffa9c9c61f6e4d1d3d3f66ff80",
"0xf2f1df0b623b387e682067303182e42f48fad26a1291d255384557b87904050e",
"0xd64343e70b897ba9e91693a42c5386f97d6209944e1c379308d3bc86c54fe5e8",
"0x5d773052bcbad17e100aec3f6057ac928e8527af81738a831e3a8c985981f283",
"0xadf196d778861d89a2d02df1fd33e6f1ff69c075ff88fb93375ef9c14672bc02",
"0x1cfa52d36e63ea08c58eccca55de3302ce79e4623c788e50cf6960106e14022f",
"0xe9e3cd9897141ea46998e090e50027efb35f37db0656e674a0e5bb90764edb9c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
