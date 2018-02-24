
// WEB3 INIT


/* Private Blockchain Network - Default */

var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider(Meteor.settings.public.blockchain.private));

/* Main Blockchain Network  - COMING SOON*/

// var Web3 = require('web3');
// web3 = new Web3(new Web3.providers.HttpProvider(Meteor.settings.public.blockchain.main));


