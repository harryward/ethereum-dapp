Template.faucet.helpers({
    'accounts':function(){
        return EthAccounts.find().fetch()
    },

});

Template.faucet.events({
    'submit .ethFaucet':function(){
        event.preventDefault()
        var self = {
            address: $(event.target).find('select').val()
        };
        var thePassword = 'harry';
        var theAddress = web3.eth.coinbase;

        web3.personal.unlockAccount(theAddress, thePassword, function (err, resp) {
            if (!err) {
                web3.eth.sendTransaction({'from':theAddress, 'to':self.address,value:web3.toWei(10,'ether')},function(err,resp){
                    if (!err) {
                        swal("Success:","your transaction has been submitted to the Blockchain","success")
                            .then(function (value) {
                                Session.set('transaction',resp);

                                Transactions.insert({_id:resp,to:self.address,from:theAddress,date:new Date()});
                            });

                    } else {
                        swal('Invalid Password', err.message, 'error');
                        return false
                    }
                })


            } else {
                swal('Invalid Password', err.message, 'error');
                return false
            }

        });
    }
});

Template.faucet.onCreated(function () {
    //add your statement here
});

Template.faucet.onRendered(function () {
    //add your statement here
});

Template.faucet.onDestroyed(function () {
    //add your statement here
});

