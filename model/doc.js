import mongoose from 'mongoose'

export const DocShema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
    },
    datum: {
        type: String,
        required: true,
    },
    doc: {
        type: String,
        required: true,
    },
    name: String,

}, { timestamps: true }) 

export default mongoose.model('Doc', DocShema)