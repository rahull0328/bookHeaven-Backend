import express from 'express'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose'
import cors from "cors"

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"
import contactRoute from "./route/contact.route.js"
import subscribeRoute from "./route/newsLetter.route.js"

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;
const connection = process.env.mongoURI
// connection string mongoDB
try {
    mongoose.connect(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected To MongoDB")    
} catch (error) {
    console.log("Error: ", error);
}

// Defining Routes
app.use('/book', bookRoute)
app.use('/user', userRoute)
app.use('/contact', contactRoute)
app.use('/subscribe', subscribeRoute)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
