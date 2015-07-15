// set providor, which should be a geth node
// my RPC settings are: 
// geth --rpc --rpcaddr="0.0.0.0" --rpccorsdomain="*" --mine --unlock=YOUR_ACCOUNT --verbosity=5 --maxpeers=0 --minerthreads="3"
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
