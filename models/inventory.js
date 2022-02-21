let mongoose = require('mongoose');

let inventoryModel = mongoose.Schema(
    {
        name: String,
        number: Number,
        email: String,
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel);