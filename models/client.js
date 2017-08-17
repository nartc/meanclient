const mongoose = require('mongoose');
const mongojs = require('mongojs');
const config = require('../config/database');

//Client Schema
const ClientSchema = mongoose.Schema({
    balance: {
        type: Number
    },
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    }
});

const Client = module.exports = mongoose.model('Client', ClientSchema);

module.exports.getClientById = (id, callback) => {
    Client.findById(id, callback);
};

module.exports.getAllClients = (callback) => {
    Client.find(callback);
};

module.exports.addClient = (newClient, callback) => {
    newClient.save(callback);
};
