import express from "express";
import { setupRedis, redisClient } from "./redis-client";
import cors from 'cors';
import { setupRoutes } from "./routes";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
console.log('cors allowed for all routes');
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

setupRoutes(app);
setupRedis();

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
