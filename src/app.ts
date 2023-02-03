import "reflect-metadata";
/* import express from "express"; */
import "express-async-errors";
import handleErrorMiddleware from "./Middlewares/handleError.middleware";
import userRoutes from "./Routes/user.routes";
import loginRouter from "./Routes/login.routes";
import contactsRoutes from "./Routes/contacts.routes";

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors);

app.use("/users", cors(), userRoutes);
app.use("/login", cors(), loginRouter);
app.use("/contacts", cors(), contactsRoutes)

app.use(handleErrorMiddleware);

export default app;
