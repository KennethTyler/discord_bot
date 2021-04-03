const clear = require("./clear")
const ping = require("./ping")
const search = require("./search")
const price = require("./price")

module.exports = [
    {
        name: 'clear', 
        function: clear
    },
    {
        name: 'ping', 
        function: ping
    }, {
        name: 'search', 
        function: search
    }, {
        name: 'price', 
        function: price
    },
]
