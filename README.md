# meteor-dapp-boilerplate

A starting point for decentralized MeteorJS applications. Includes Ethereum.js, iron-router, Bootstrap 3, Font Awesome, LESS and more.

**Based off of [Differential's meteor-boilerplate](https://github.com/Differential/meteor-boilerplate) and [Ethereum's meteor-dapp-wallet](https://github.com/ethereum/meteor-dapp-wallet). Please note that this boilerplate is still in Alpha.

* [Alpha](#alpha)
* [Included Packages](#included-packages)
* [Installation](#installation)
* [Deployment](#deployment)
* [File Structure](#file-structure)
* [Bootstrap and Less](#bootstrap-and-less)
* [Favicons and Touch Icons](#favicons-and-touch-icons)
* [Private Network](#private-network)
* [Unit Testing](#unit-testing)
* [License](#license)

## <a name="included-packages"></a> Included Packages

* Collections:
  * [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers)
  * [matb33:collection-hooks](https://github.com/matb33/meteor-collection-hooks)
  * [reywood:publish-composite](https://github.com/englue/meteor-publish-composite)
  * [frozeman:persistent-minimongo](https://github.com/frozeman/meteor-persistent-minimongo)
* Router:
  * [iron:router](https://github.com/EventedMind/iron-router)
  * [zimme:iron-router-active](https://github.com/zimme/meteor-iron-router-active)
  * [yasinuslu:blaze-meta](https://github.com/yasinuslu/blaze-meta)
* [Less](http://lesscss.org)
  * [Bootstrap](http://getbootstrap.com)
  * [Font Awesome](http://fontawesome.io)
* [Ethereum](http://ethereum.org)
  * [ethereum:elements](https://github.com/ethereum/meteor-package-elements)
  * [ethereum:tools](https://github.com/ethereum/meteor-package-tools)
  * [ethereum:js](https://github.com/ethereum/ethereum.js)
  * [ethereum:accounts](https://github.com/ethereum/meteor-package-accounts/)
  * [ethereum:blocks](https://github.com/ethereum/meteor-package-blocks/)
* Numbers:
  * [3stack:bignumber](https://github.com/MikeMcl/bignumber.js/)
  * [chance.js](http://chancejs.com/)
* Language:
  * [tap:i18n](https://github.com/TAPevents/tap-i18n)
* Unit Testing:
  * [mike:mocha](https://github.com/mad-eye/meteor-mocha-web/)
* Misc:
  * [Moment.js](http://momentjs.com/)
  * [chuangbo:cookie](https://github.com/chuangbo/meteor-cookie)
  * [Underscore.js](http://underscorejs.org/)
  * [Underscore.string](http://epeli.github.io/underscore.string/)
  * [frozeman:storage](https://github.com/frozeman/meteor-storage)
  * [frozeman:template-var](https://github.com/frozeman/meteor-template-var)
  * [frozeman:reactive-timer](https://github.com/frozeman/meteor-reactive-timer)
  
## <a name="alpha"></a> Hosted Alpha

http://meteor-dapp-boilerplate.meteor.com

## <a name="installation"></a> Installation

Clone this repo

    $ git clone http://github.com/SilentCicero/meteor-dapp-boilerplate
    
Create an account with geth (create a passphrase):

    $ geth account new

Start a local geth node instance (then hit 'enter' to promt passphrase input):

    $ geth --rpc --rpcaddr="0.0.0.0" --rpccorsdomain="*" --mine --unlock=0 --verbosity=5 --maxpeers=0 --minerthreads="4"

Start the app using Meteor

    $ cd meteor-dapp-boilerplate/app
    $ meteor

## <a name="file-structure"></a> File Structure

This file structure is largley based off of Differentials boilerplate, but with client-only directories. Client-only files are stored in the `client` directory. The `public` directory is for publicly accessible assets such as images and fonts. The `i18n` directory is for language files.

## <a name="bootstrap-and-less"></a> Bootstrap and LESS

The majority of Bootstrap can be customized with LESS variables. If you look in `client/stylesheets/base/lib/bootstrap/variables.import.less` you will see a slew of configuration variables that can be tweaked to drastically change the look and feel of your site without having to write a single line of CSS.

However we should avoid modifying the core Bootstrap Less files (in case we want to update them later), and should instead override the variables in our own LESS files.

For example, to change the color of all primary buttons and links, simply add a `@brand-primary` variable to `stylesheets/base/variables.import.less`:

```
// variables.import.less
@brand-primary: #DC681D;
```

If you'd like to override a feature of Bootstrap that can't be modified using variables, simply create a new file in the `client/stylesheets/components` directory named after the corresponding Bootstrap component (eg. `buttons` in this case), and make your changes there.

```
// buttons.import.less
.btn {
  text-transform: uppercase;
}
```

After your file is ready, you need to import it into `client/stylesheets/base/global.less`. So, you would add in this statement:
```
@import '@{components}/buttons.import.less';
```

The reason that this is done is to avoid any issues when the LESS files are compiled into CSS. That way, if one component relies on another or you want a certain order for your components, you can avoid any issues.


## <a name="favicons-and-touch-icons"></a> Favicons and Touch Icons

Upload your image to http://realfavicongenerator.net/ and place the resulting images in `public/images/favicons`

## <a name="private-network"></a> Private Network

If you would like to test your dApp with a local private Ethereum node, a `test-genesis.json` file is provided in the `app` folder. This is an example command line to run your own private network:

    $ geth --rpc --rpccorsdomain "*" --genesis test-genesis.json --networkid 1234 --mine --unlock 0

## <a name="unit-testing"></a> Unit Testing

All tests are stored in the `app/tests` directory. By default the [Mocha](https://mochajs.org/) testing framework is not installed, but some example tests are provided with this boilerplate. In order to activate Mocha/Velocity you must edit `app/.meteor/packages` and uncomment `#mike:mocha` to `mike:mocha`. A testing button will appear on the top right hand corner of your dApp. Remember to remove the mocha package for deployment and production.

Add Mocha/Velocity

    $ meteor add mike:mocha
    
Remove Mocha/Velocity

    $ meteor remove mike:mocha

Please refer to this page for more on unit testing in Meteor: https://velocity.readme.io/

## <a name="license"></a> License

Released under the MIT License, see LICENSE file.
