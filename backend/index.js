import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookroute from './routes/book.route.js';
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoURI;
//connect to database

mongoose.connect(URI).then(() => console.log('Database connected'))
.catch(err => console.log(err));


//Routes
app.use("/book", bookroute);

app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}`);
});   