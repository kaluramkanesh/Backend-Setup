require('dotenv').config();
const { connectDB } = require("./db/index")
const { app } = require("./app")
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3001, () => {
            console.log(`Server is running at port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("MONGODB connection failed !! ", error)
    })
// this is the first approach to connect DB and server create
/*
const express = require("express")
const app = express()
    ; (async () => {
        try {
            console.log((`Hello ${process.env.MONGODB_URL}/${DB_NAME}`))
           const mongodbconnection= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

            app.on("error", (error) => {
                console.log("Error: ", error)
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`App is listenng on port ${process.env.PORT}`)
            })
        } catch (error) {
            console.log("Error: ", error)
            throw error
        }
    })()
    */