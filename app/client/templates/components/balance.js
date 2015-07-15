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

	'rendered': function() {
        var coinbase = web3.eth.coinbase;
		this.updateBalance = Meteor.setInterval(function() {
			web3.eth.getBalance(coinbase, function(err, result){
                Session.set("balance", String(result));
            });
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
