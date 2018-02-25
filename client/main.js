import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import swal from 'sweetalert';
import './main.html';


Meteor.startup(function(){
    EthAccounts.init(); // init the eth accounts package
    EthTools.ticker.start(); // init the ticker api
    EthBlocks.init() // init the eth blocks package
})












































