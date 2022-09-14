import { ChangeStreamDocument } from "mongodb";
import mongoose from "mongoose";

const connString = 'mongodb+srv://pczuban:test1234@cluster0.dxv8pmj.mongodb.net/test'



export const main = () => {
    console.log('Connecting to mongo');
    const db = mongoose.connect(connString)
    console.log('Mongo Connected!')
}
