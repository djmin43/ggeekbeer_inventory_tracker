import mongoose, { model } from 'mongoose';

// SChema
const HopSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }

});

export default model('Hops', HopSchema)