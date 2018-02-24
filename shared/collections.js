
Wallets = new Mongo.Collection('wallets', {connection: null});


CustomContracts = new Mongo.Collection('custom-contracts', {connection: null});


// Contains the transactions
Transactions = new Mongo.Collection('transactions');


// Contains the pending confirmations
PendingConfirmations = new Mongo.Collection('pending-confirmations', {connection: null});


// Contains the custom contract events
Events = new Mongo.Collection('events', {connection: null});


// Contains Coin Information
Tokens = new Mongo.Collection('tokens', {connection: null});

