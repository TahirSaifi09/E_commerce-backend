// const express = require ("express");
import express from "express";
import ConnectDB from "./src/config/db.js";
import { ProductRoute } from "./src/routes/routes.js";
const app = express();


app.use(express.json())

app.get("/", (req,res)=>{
    console.log(`You are at route "/" product`)
    res.send("Hello World");
})
app.use("/products",ProductRoute)

ConnectDB().then(()=>{
    app.listen(8000, ()=>{
        console.log("You are at 8000 port")
    });

}).catch((error)=>{
    console.error(error);
})