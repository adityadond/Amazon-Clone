const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "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"
);

//app config
const app=express();
//middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/',(request,response)=>response.status(200).send
('hello world'))

app.post('/payments/create', async(request,response)=>{
    const total=request.query.total;
    console.log('Payment request recievd', total);
    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency:"usd",
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api=functions.https.onRequest(app)


//Eg endpoint
//http://localhost:5001/challenge-d8ee8/us-central1/api

