Template.accounts.helpers({
    'accounts':function(){
        return EthAccounts.find().fetch()
    },
    'bal':function(baler){

        return parseInt(web3.fromWei(parseFloat(baler)))
    }
});

Template.accounts.events({
    //add your events here
});

Template.accounts.onCreated(function () {
    //add your statement here
});

Template.accounts.onRendered(function () {
    //add your statement here
});

Template.accounts.onDestroyed(function () {
    //add your statement here
});

