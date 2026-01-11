import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser"
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path"
import {errorMiddleware} from "./middlewares/errors/error.middleware";
import connectDB from "./config/db";
import UserRoute from "./routers/user.route"
import ProductRoutes from "./routers/product.route"
import CartRoutes from "./routers/cart.routes"


const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use(helmet());
app.use(morgan("dev"));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
const swaggerDocument = YAML.load(
  path.join(__dirname, "docs/swagger.yaml")
);

app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
connectDB()

app.use("/api/auth", UserRoute)
app.use("/api/products", ProductRoutes)
app.use("/api/cart", CartRoutes)

app.use(errorMiddleware)

export default app;
