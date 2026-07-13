import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { swaggerDocs } from "./config/swagger";
import routes from "./routes";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

// global middlewares

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// health route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🌱 Plant Care API is running.",
  });
});

// plants routes
app.use("/api/v1", routes);

// api doc
swaggerDocs(app);

app.use(notFound);

app.use(errorHandler);

export default app;
