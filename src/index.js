// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path:'./.env'
})



connectDB()
.then(()=>{
    app.listen(8000, ()=>{
        console.log("server is listening at port" , process.env.PORT )
    })
})
.catch((error)=>{console.log("MONGODB connection failed !!!!!!", error)})



/*

import express from "express"
const app = express();

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log(error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            consolve.log(`app is listening on port ${process.env.PORT}`)
        })
    }

    catch(error){
        console.log("Error:", error)
    }
})

*/