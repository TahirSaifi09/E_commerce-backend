// const express = require ("express");
import express from "express";
import ConnectDB from "./src/config/db";
const app = express();

app.get("/", (req,res)=>{
    console.log(`You are at route "/" product`)
    res.send("Hello World");
})

app.listen(8000, ()=>{
    console.log("You are at 8000 port")
});