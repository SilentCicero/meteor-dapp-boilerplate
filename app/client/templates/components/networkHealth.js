/**
Template Controllers

@module Templates
*/

/**
The network health template

@class [template] components_networkHealth
@constructor
*/

Template['components_networkHealth'].helpers({
	
	/**
    Get whether web3 object exists.

    @method (web3Exists)
    */
	'web3Exists': function(){
		return (_.isObject(web3) ? 'True' : 'False');
	},

	/**
    Get coinbase address.

    @method (coinbase)
    */
	'coinbase': function(){
		return web3.eth.coinbase;
	},

	/**
    See if client is listening.

    @method (listening)
    */
	'listening': function(){
		return (_.isUndefined(web3.net) ? '--' : web3.net.listening);
	},

	/**
    Get number of peers.

    @method (peerCount)
    */
	'peerCount': function(){
		return (_.isUndefined(web3.net) ? '--' : web3.net.peerCount);
	},

	/**
    Get gas price.

    @method (peerCount)
    */
	'gasPrice': function(){
		return web3.eth.gasPrice;
	},

	/**
    Get default block number. (Not working for Go Eth Cli).

    @method (defaultBlock)
    */
	'defaultBlock': function(){
		return web3.eth.defaultBlock;
	},

	/**
    Get present block number.

    @method (blockNumber)
    */
	'blockNumber': function(){
		return web3.eth.blockNumber;
	},

	/**
    Get whether mining is turned on.

    @method (mining)
    */
	'mining': function(){
		return web3.eth.mining;
	},
});
