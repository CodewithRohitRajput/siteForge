import express from 'express'
import connectDB from './config/db.js';
const app = express()

const port = 8000;

connectDB()

app.get('/', (req,res)=>{
    res.send("Server!")
})

app.listen(port,()=>{
    console.log("server is running bruh!")
})