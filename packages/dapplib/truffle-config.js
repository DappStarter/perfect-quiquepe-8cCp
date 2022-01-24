require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth shift pudding imitate private foster sketch'; 
let testAccounts = [
"0x23cda15a8e7450f485032df64b5d60155b9bd02f4bd828f07a28743eaf656b3f",
"0xfcc1ff4aadbf52aef0bd7fe86408a20ba59353233258f696355463f51ef76021",
"0xec71c98bcea204d1cabebfbb0ff32cf025642fb491414cb182ac2c427f9b73c5",
"0xe9c13d540c25e4cd869610b294df79a3e76cf7a03d1b1f272f4f9b259b31ab3f",
"0x5d4d5408b137d58b8cdf18c78e6526ab900d056668003387c8f51014794b9df2",
"0x210a49fee1add6ccfb32f47a172a97c4a033a42c11574d55d211565cc2e1030c",
"0x2141912e857cd6104cefdaa9b704993219f924c28939d840d7384bc1e28099c4",
"0x3986ecff4516d2e8fa42a07622cdede598533b0a95827b3516f8086db035c24a",
"0x90b800884754f46a5ff9fbc9128aec2285b062f7accbdad55121ebeae7a9b84f",
"0x64f1d0dc0bf3e1f4414cfcc983a47c338be8968bea4ff2f5a33344d516dc401d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

