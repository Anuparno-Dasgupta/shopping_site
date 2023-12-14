const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRoutes");
const cors = require("cors");
const app = express();

app.use(cors(
  {origin: "*"}
));
const mongoDbUrl = "mongodb+srv://user2023:test1234@cluster0.29wpwoy.mongodb.net/shopping_site?retryWrites=true&w=majority"

mongoose.connect (mongoDbUrl, {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", () => {
  console.log("Connected to MongoDB:");
});

app.use(express.json());
app.use(productRouter);
app.listen(5000, "0.0.0.0", () => {
    console.log("Server started at port 5000")
});