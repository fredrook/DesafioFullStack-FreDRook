import "reflect-metadata";
import express from "express";
import cors from "cors";
import "express-async-errors";
import handleErrorMiddleware from "./Middlewares/handleError.middleware";
import userRoutes from "./Routes/user.routes";
import loginRouter from "./Routes/login.routes";
import contactsRoutes from "./Routes/contacts.routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../src/swagger.json";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/users", userRoutes);
app.use("/login", loginRouter);
app.use("/contacts", contactsRoutes);

app.use(handleErrorMiddleware);

export default app;
