import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const connectToDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to DB');
  } catch (error) {
    throw error;
  }
};

const port = process.env.PORT || 5000;
app.listen(port, () => {
  connectToDb();
  console.log(`Server running on port: ${port}`);
});
