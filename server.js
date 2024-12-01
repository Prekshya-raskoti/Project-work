import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/useRoute.js"

import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import mongoose from "mongoose"

// app config
const app = express()
const port = 4000;

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

// mongoose.connect("mongodb+srv://leafyfeast:leafyfeast@cluster0.m5ewh.mongodb.net/e-commerce")

app.get("/", (req,res)=> {
    res.send("API Working")
})

app.listen(port,()=> {
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://prekshyaraskoti:PreKsShHEllo@cluster0.dy4we.mongodb.net/?