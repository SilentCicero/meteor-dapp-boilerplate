/**
Template Controllers

@module Templates
*/

var refresh = function(){  
	// Insert accounts into collection
	var accounts = web3.eth.accounts;
    
    // Get accounts
	if(!_.isArray(accounts))
        return;
    
    // If no Accounts collection is available, quit
    if(_.isUndefined(Accounts))
        return;
    
    // start a count for indexing and storage
    var count = 0;

    // add each account to the accounts collection
    _.each(accounts, function(address){
        count += 1;
        
        Accounts.upsert({address: address}, {number: count, address: address, balance: web3.eth.getBalance(address).toString(10), createdAt: new Date()});
    });
};

/**
The accounts template

@class [template] components_accounts
@constructor
*/

// when the template is rendered
Template["components_accounts"].onRendered(refresh);

// template events
Template['components_accounts'].events({
	/**
    Convert Wei to Ether Values

    @method (fromWei)
    */

	'click .btn-refresh': function(){
        // remove all accounts
        Accounts.remove({});
        
        // refresh the accounts
        refresh();
    },
});

// template handlebar helper methods
Template['components_accounts'].helpers({
	/**
    Convert Wei to Ether Values

    @method (fromWei)
    */

	'fromWei': function(weiValue, type){
		return web3.fromWei(weiValue, type).toString(10);
	},

    
	/**
    Get Eth Accounts

    @method (accounts)
    */

	'accounts': function(){
		return Accounts.find({});	
	},
});
