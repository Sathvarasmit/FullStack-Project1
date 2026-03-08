import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

// Reads JSON data from request body (like API calls from frontend)
// limit 16kb means don't accept too large requests (security)
app.use(express.json({ limit: "16kb" }))

// Reads form data (like HTML forms that submit data)
// extended: true means nested objects are allowed { user: { name: "john" } }
// limit 16kb same security reason
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// Serves static files (images, CSS, JS) from "public" folder
// means anyone can access files inside public/ folder directly from browser
// example: public/image.png → http://localhost:8000/image.png
app.use(express.static("public"))

// Allows backend to read and set cookies from user's browser
// without this req.cookies will be empty
app.use(cookieParser())

export {app}


// .use is only use for middlewares or for configurations