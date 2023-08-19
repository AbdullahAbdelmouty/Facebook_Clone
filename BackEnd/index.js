require("dotenv").config();
require("express-async-errors");
const express = require("express");
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
// database
const connectDB = require("./db/connect");
// Middleware
const notFound = require("./middleware/not-found");
const errorHandlerMidlleware = require("./middleware/error-handler");
// routers
const authRouter = require('./routers/authRoutes')
const app = express();
//middleware
app.use(morgan('tiny'))
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECERT))
app.get('/',(req,res)=>{
    res.send("Home Page")
})
app.use('/api/vi/auth',authRouter);
// must put notfound middleware before error handleware to check first
// if the route exist or not 
app.use(notFound);
app.use(errorHandlerMidlleware);
const port = process.env.PORT || 5000;
const start = async () => {
    //connect db
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => { console.log(`server listen to  ${port}..........`) })
    } catch (error) {
        // console.log(error);
    }
}

start();
