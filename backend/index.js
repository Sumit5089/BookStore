import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookroute from './routes/book.route.js';
import userroute from './routes/user.route.js';
import cors from 'cors';
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
const PORT = process.env.PORT || 3000;
const URI = process.env.MongoURI;

//connect to database
mongoose.connect(URI).then(() => console.log('Database connected'))
.catch(err => console.log(err));

//Routes
app.use("/book", bookroute);
app.use("/user", userroute)

app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}`);
});   