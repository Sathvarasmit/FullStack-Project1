import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// import routes

import userRouter from './routes/user.routes.js'

// routes declaration

app.use('/api/v1/users', userRouter)

export { app }























// Note: app.use() is specifically the method used to mount middlewares and configurations in Express
// Reads JSON data from request body (like API calls from frontend)
// limit: "16kb" means don't accept too large requests (prevents server crashes/security)
// Allows the backend to securely READ cookies from the user's browser
// (Setting cookies is built into Express via res.cookie(), but reading them needs this package)
// without this package, req.cookies will just be empty or undefined
// Serves static files (images, CSS, JS, PDFs) from the "public" folder
// means anyone can access files inside the public/ folder directly from the browser
// example file: public/image.png → accessed via URL: http://localhost:8000/image.png
// Reads URL-encoded data (like regular HTML form submissions)
// extended: true means nested objects are allowed in the URL payload e.g. { user: { name: "john" } }
// limit: "16kb" same security reason