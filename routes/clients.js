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

router.get("/clients", (req, res) => {
    Client.getAllClients((err, clients) => {
        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: "Failed to get clients"
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

module.exports = router;