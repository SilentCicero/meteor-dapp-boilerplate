/**
Template Controllers

@module Templates
*/

/**
The balance template

@class [template] components_balance
@constructor
*/

Template['components_balance'].helpers({
    /**
    Get The Original Balance

    @method (watchBalance)
    */

    'watchBalance': function(){        
		return web3.fromWei(Session.get('balance'), LocalStore.get('etherUnit')).toString(10);
    },
});

_.extend(Template['components_balance'], {	
	/**
    On Template Created

    @method (created)
    */

	'created': function() {
		this.updateBalance = Meteor.setInterval(function() {
			var coinbase = web3.eth.coinbase;
			var originalBalance = 0;
			var balance = web3.eth.getBalance(coinbase);
			var originalBalance = web3.toDecimal(balance);

			Session.set("balance", balance.toString(10));
		}, 1 * 1000);
	},

	/**
    On Template Destroyed

    @method (destroyed)
    */

	'destroyed': function() {
		Meteor.clearInterval(this.updateBalance);
	}
});
