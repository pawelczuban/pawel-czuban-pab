import  express  from "express";
import mongoose from "mongoose";
import { main } from "./db";

const app = express();
app.use(express.json())

main();

const danie = require('./routes/danieRouter');
app.use('/dania', danie);

const pracownik = require('./routes/pracownikRouter');
app.use('/pracownik', pracownik);

const produkt = require('./routes/produktRouter');
app.use('/produkty', produkt);

app.listen(3000)