const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HebW4JBS87I5mgfa8oBYNjmUhowMtcRpzpYBaC6juO2BwboGCqEijLhAPaKA37Zm7eXMyJMrkmKCJIKDnj9mjfi00iYcDiTPa')

//API

// -App config
const app = express();
// -Middleware
app.use(cors({origin:true}));
app.use(express.json());
// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})
// -Listen command
exports.api = functions.https.onRequest(app);
//example endpoint
//http://localhost:5001/challenge-459f3/us-central1/api