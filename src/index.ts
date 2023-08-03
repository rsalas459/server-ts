import "dotenv/config"
import express, { Request, Response } from "express"
import cors from "cors"
import { router } from "./routes"
import {db, MONGO_DB }  from "./config/mongo";

const PORT = process.env.PORT || 3000
const app = express()
app.get('/', (_req: Request, res: Response) => {
    return res.send('Express Typescript on Vercel')
  })
app.use(cors());
app.use(express.json());
app.use(router);
console.log(`conexion a la base de datos ${MONGO_DB}`);
db().then(() => console.log("Connected to MongoDB"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


