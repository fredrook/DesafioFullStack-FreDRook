import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleErrorMiddleware from "./Middlewares/handleError.middleware";
import loginRouter from "./Routes/login.routes";
import userRoutes from "./Routes/user.routes";

const app = express();
app.use(express.json());

app.use("/login", loginRouter);
app.use("/users", userRoutes);

app.use(handleErrorMiddleware);

export default app;
