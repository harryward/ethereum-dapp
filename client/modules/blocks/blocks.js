Template.blocks.helpers({
    'transactions':function(){
        return Transactions.find({},{sort:{date:-1}}).fetch()
    },
    'theTran':function(){
        var self = this;
        if(Session.get('sync') && web3.eth.getTransaction(self._id)){
            return web3.eth.getTransaction(self._id)
        }

    },
    'value':function(){

    },
    'toAccount':function(toId){
        var self = this;
        return EthAccounts.findOne({'address':toId}).name
    },
    'fromAccount':function(fromId){
        var self = this;
        return EthAccounts.findOne({'address':fromId}).name
    },
    'num':function(num){
        return web3.fromWei(parseFloat(num))
    }
});

Template.blocks.events({
    //add your events here
});

Template.blocks.onCreated(function () {

    setInterval(function(){
        Session.set('sync',new Date().getTime());
    },500)
});

Template.blocks.onRendered(function () {
    //add your statement here
});

Template.blocks.onDestroyed(function () {
    //add your statement here
});

