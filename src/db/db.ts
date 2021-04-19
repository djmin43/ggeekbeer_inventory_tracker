import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.DB_URI}`, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log(`db connected!`)
    } catch(err) {
        console.log(err)
    }
};

export default connectDB;