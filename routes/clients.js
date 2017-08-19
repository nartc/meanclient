const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const mongojs = require('mongojs');

const Client = require('../models/client');

//Add Clients
router.post("/addClients", (req, res) => {
    for (clientIndex in req.body.clients) {
        console.log(JSON.stringify(req.body.clients[clientIndex]));
        
        let newClient = new Client({
            balance: req.body.clients[clientIndex].balance,
            email: req.body.clients[clientIndex].email,
            firstName: req.body.clients[clientIndex].firstName,
            lastName: req.body.clients[clientIndex].lastName,
            phone: req.body.clients[clientIndex].phone
        });

        Client.addClient(newClient, (err) => {
            if(err) {
                console.log(err);
                res.json({
                    success: false,
                    msg: "Failed to add clients"
                });
            }
        });
    }

    res.json({
        success: true,
        msg: "All clients added"
    });
});

//Add Single Client
router.post("/addClient", (req, res) => {
    let newClient = new Client({
        balance: req.body.balance,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });

    Client.addClient(newClient, (err, client) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: "Failed to add client"
            });
        } else {
            res.json({
                success: true,
                msg: "New Client added",
                client: client
            });
        }
    });
});

//Get All Clients
router.get("/clients", (req, res) => {
    Client.getAllClients((err, clients) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: "Failed to get clients: "+err
            });
        } else {
            res.json({
                success: true,
                msg: "Fetched all clients",
                clients: clients
            });
        }
    });
});

//Get Client By Id
router.get("/client/:id", (req, res, next) => {
    Client.getClientById({_id: mongojs.ObjectId(req.params.id)}, (err, client) => {
        if(err) {
            res.json({
                success: false,
                msg: "Failed to fetch Client by Id: "+err
            });
        } else {
            res.json({
                success: true,
                msg: "Fetched Client by Id",
                client: client
            });
        }
    });
});

//Update Client
router.put("/edit/:id", (req, res, next) => {
    console.log(req.params);
    console.log(req.body);
    Client.findByIdAndUpdate({_id: mongojs.ObjectId(req.params.id)}, req.body, {new: true}, (err, client) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: "Client Edited",
                client: client
            });
        }
    });
});

//Delete Client
router.delete("/delete/:id", (req, res, next) => {
    Client.remove({_id: mongojs.ObjectId(req.params.id)}, (err, client) => {
        if(err) {
            console.log(err);
            return next(err);
        } else {
            res.json({
                success: true,
                msg: "Client Deleted",
                client: client
            });
        }
    });
});

module.exports = router;