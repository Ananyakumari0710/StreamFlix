//step 1 server create
//const express = require('express');
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import databaseConnection from "./utils/database.js";
import userRoute from "./routes/userRoute.js";

dotenv.config(); // load .env first

// Connect to database
databaseConnection();

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listen at port ${process.env.PORT}`);
});
