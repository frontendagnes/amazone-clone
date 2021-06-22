const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51J2CkpEyiy5eJg0JHbMNCxIsSYHSIRt1HhN8FfSFX5G4FluyQFFFIbEXgnD8q7l4BnSHkNl9temuZD447XHAvONA00db7rzhNX");

// API

// App config
const app = express();

// Middlewars
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment request recive BOM >>>", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "USD",
    });
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});
// Listen command

exports.api = functions.https.onRequest(app);
// Example enpoint
// http://localhost:5001/e-clone-eb7a4/us-central1/api