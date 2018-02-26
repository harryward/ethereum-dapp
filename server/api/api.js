JsonRoutes.setResponseHeaders({
    "Cache-Control": "no-store",
    "Pragma": "no-cache",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
});


var Fiber = require('fibers');

function sleep(ms) {
    var fiber = Fiber.current;
    setTimeout(function () {
        fiber.run();
    }, ms);
    Fiber.yield();
}


JsonRoutes.add("get", "/api/method/:function", function (req, res, next) {
    var id = req.params.function;
    var par = req.query;


    var Fiber = require('fibers');

    function sleep(ms) {
        var fiber = Fiber.current;
        setTimeout(function () {
            fiber.run();
        }, ms);
        Fiber.yield();
    }


    Fiber(function () {
        console.log('running');
        Meteor.call(id)
        sleep(500);

        JsonRoutes.sendResult(res, {
            data: {
                function: id,
                query: par
            }
        });

    }).run();


});

JsonRoutes.add("get", "/api/accounts", function (req, res, next) {
    var id = req.params.id;
    JsonRoutes.sendResult(res, {
        data: {
            network: 'private',
            coinbase: {
                address: web3.eth.coinbase,
                balance: parseFloat(web3.fromWei(web3.eth.getBalance(web3.eth.coinbase))),
                balanceWei: parseFloat(web3.eth.getBalance(web3.eth.coinbase))
            },
            accounts: web3.eth.accounts
        }
    });
});

JsonRoutes.add("post", "/api/method", function (req, res, next) {
    var data = req.body;
    web3.personal.unlockAccount(data.from.address, data.from.password, function (err, resp) {
        if (!err) {

            web3.eth.sendTransaction({to: data.to.address,data:data.data, from: data.from.address, value: data.value},function(error,response){
            if(!error){
                JsonRoutes.sendResult(res, {
                    data: response
                });
            }else{
                JsonRoutes.sendResult(res, {
                    data: error.message
                });
            }
            });

        }else{
            JsonRoutes.sendResult(res, {
                data: err.message
            });
        }
    });
});



