var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send(generateAddresses());
});

app.listen(3000, function () {
    console.log('Accepting HTTP requests on port 3000.');
});

function generateAddresses() {
    var numberOfAddresses = chance.integer({
        min: 1,
        max: 10
    });
    var addresses = [];
    for (var i = 0; i < numberOfAddresses; i++) {
        addresses.push({
            address: chance.address(),
            zip: chance.zip(),
            city: chance.city(),
            country: chance.country({ full: true})         
        });
    };
    console.log(addresses);
    return addresses;
}