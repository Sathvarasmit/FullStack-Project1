import connectDB from './db/index.js'
import dotenv from 'dotenv'


dotenv.config({
    path: './env'
})
connectDB()



















/*
import express from 'express'
const app = express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error)=>{
            console.log('ERRR', error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error('ERROR',error)
        throw err
    }
})()
*/

// THIS IS FIRST METHOD TO CONNECT DB BUT THERE IS ONE ANOTHER METHOD WEHRE YOU WRITE CODE OF CONNECTION TO ANOTHER FOLDER CALLED DB AND FROM THAT WE WILL IMPORT HERE TO INDEX
