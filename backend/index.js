//step 1 server create
//const express = require('express');
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

databaseConnection();

dotenv.config({
    path:".env"
})

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: process.env.CORS_ORIGIN,  // "http://localhost:5173"
  credentials: true,                // allow cookies/authorization headers
};

app.use(cors(corsOptions));

 
// api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
});