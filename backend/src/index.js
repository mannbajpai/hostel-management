import express from "express"
import {configDotenv} from "dotenv";
import {connectDB} from "./config/db.js";
const app = express()
configDotenv()

const port = process.env.PORT

app.get('/', (req, res)=>{
    res.json({"message":"running"})
})

app.listen(port, ()=>{
    console.log(`Server Running on port : ${port}`);
})