Template.ticker.helpers({
    'ticker':function(unit){
        return numeral(EthTools.ticker.findOne(unit).price).format('$0,0.00')
    }
});

Template.ticker.events({
    //add your events here
});

Template.ticker.onCreated(function () {
    //add your statement here
});

Template.ticker.onRendered(function () {
    //add your statement here
});

Template.ticker.onDestroyed(function () {
    //add your statement here
});

