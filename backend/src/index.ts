import express, { Express } from "express";
import mongoose from "mongoose";
import FinancialRecordModel from "./schema/financial-record";
import financialRecordRouter from "./routes/financial-record";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  "mongodb+srv://kalebtesfaye2031:UJiKotJNnsKxeVtB@financetracker.iw4ci.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB :)"))
  .catch((err) => console.error("Failed to connect to MONGODB:(", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
