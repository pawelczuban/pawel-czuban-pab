import  express  from "express";
import mongoose from "mongoose";
import { main } from "./db";

const app = express();
app.use(express.json())

main();

const danie = require('./routes/danieRouter');
app.use('/dania', danie);

app.listen(3000)