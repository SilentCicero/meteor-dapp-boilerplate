
// disconnect any meteor server
if(location.host !== 'localhost:3000' && location.host !== '127.0.0.1:3000')
    Meteor.disconnect();


// Set the default unit to ether
if(!LocalStore.get('etherUnit'))
    LocalStore.set('etherUnit', 'ether');


// Set Session default values for components
if (Meteor.isClient) {
	Session.setDefault('balance', '0');
}

Meteor.startup(function() {
    // set providor, which should be a geth node
    // my RPC settings are: 
    // geth --rpc --rpcaddr="0.0.0.0" --rpccorsdomain="*" --mine --unlock=YOUR_ACCOUNT --verbosity=5 --maxpeers=0 --minerthreads="3"
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

    // SET default language
    if(Cookie.get('TAPi18next')) {
        TAPi18n.setLanguage(Cookie.get('TAPi18next'));
    } else {
        var userLang = navigator.language || navigator.userLanguage,
        availLang = TAPi18n.getLanguages();

        // set default language
        if (_.isObject(availLang) && availLang[userLang]) {
            TAPi18n.setLanguage(userLang);
            // lang = userLang; 
        } else if (_.isObject(availLang) && availLang[userLang.substr(0,2)]) {
            TAPi18n.setLanguage(userLang.substr(0,2));
            // lang = userLang.substr(0,2);
        } else {
            TAPi18n.setLanguage('en');
            // lang = 'en';
        }
    }

    // Setup Moment and Numeral i18n support
    Tracker.autorun(function(){
        if(_.isString(TAPi18n.getLanguage())) {
            moment.locale(TAPi18n.getLanguage().substr(0,2));
            numeral.language(TAPi18n.getLanguage().substr(0,2));
        }
    });	

	// Set Meta Title
	Meta.setTitle(TAPi18n.__("dapp.app.title"));
});
