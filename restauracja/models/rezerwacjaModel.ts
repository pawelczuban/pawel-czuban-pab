import mongoose from "mongoose";

const rezerwacja = new mongoose.Schema({
    stolik: {
        type: String,
        required: true,
    },
    start: {
        type:Number,
        require:true,
    },
    end: {
        type:Number,
        required:true,
    },
    client: {
        type:String,
        required:true,
    },
})

const rezerwacjaModels = mongoose.model('rezerwacja',rezerwacja)
export default rezerwacjaModels;