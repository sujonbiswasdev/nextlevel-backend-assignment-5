import express, { Application } from "express";
import { IndexRouter } from "./app/routes";
import { notFound } from "./app/middleware/notFound";

const app: Application = express();

// Middleware to parse JSON
app.use(express.json());

// auth
app.use("/api", IndexRouter);

app.use(notFound)


export default app;