Template.accounts.helpers({
    'accounts': function () {
        return EthAccounts.find({},{sort:{name:1}}).fetch()
    },
    'bal': function (baler) {

        return numeral(web3.fromWei(parseFloat(baler))).format('0,0.00')
    }
});

Template.accounts.events({
    'click .create-account': function (event, template) {
        event.preventDefault();
        var thePassword = prompt('enter password, save somewhere and do not forget this.')

        if (thePassword) {
            var theAccount = web3.personal.newAccount(thePassword);
            swal('Account Created', theAccount, 'success')

        }
    },
    'click .theFaucet':function(event,template){
        event.preventDefault();
        var self = this;
        var theAddress = '0xbe406cde3bbce65fea8da371f500af66cdfa2451';
        var thePassword = 'test';
        web3.personal.unlockAccount(theAddress, thePassword, function (err, resp) {
            if (!err) {
                web3.eth.sendTransaction({'from':theAddress,'to':self.address,value:web3.toWei(10,'ether')},function(err,resp){
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
    },
    'click .editName': function (event, template) {
        event.preventDefault();
        var self = this;
        var password = prompt('enter account password');
        web3.personal.unlockAccount(self.address, password, function (err, resp) {
            if (!err) {
                swal("Enter new Account Name:", {
                    content: "input",
                    inputVal: self.name
                })
                    .then(function (value) {
                        EthAccounts.update({'_id': self._id}, {$set: {'name': value}})
                    });


            } else {
                swal('Invalid Password', err.message, 'error');
                return false
            }

        });


    }
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

