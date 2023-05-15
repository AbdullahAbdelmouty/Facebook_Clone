require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandlerMidlleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routers/products");
const app = express();
//middleware
app.use(express.json());
// Add middleware to set headers
app.use((req, res, next) => {
    // Set the Access-Control-Allow-Origin header to allow requests from any domain
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Set the Access-Control-Allow-Methods header to allow GET, POST, PUT, DELETE requests
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Set the Access-Control-Allow-Headers header to allow the Content-Type header
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Call next middleware
    next();
  });
app.use("/api/v1/products", productsRouter);
app.use(notFound);
app.use(errorHandlerMidlleware);
const port = process.env.PORT || 5000;
const start = async () => {
    //connect db
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => { console.log(`server listen to port ${port}..........`) })
    } catch (error) {
        // console.log(error);
    }
}

start();
