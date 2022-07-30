import express from "express";
import mongoose from "mongoose";
import colors from "colors";

// Import products routes
import productsRouter from "./routes/productsRoutes.js";

// DB connection
try {
    mongoose.connect(
        "mongodb://localhost:27017/apiTwitch",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => console.log(colors.bgCyan("DB Connection ok!")));
} catch (error) {
    console.log(error);
}


// App instance
const app = express();

// JSON Middleware
app.use(express.json());

// Route middleware
app.use("/api/v1/products", productsRouter);

// App server listening
app.listen(3000, () => console.log(colors.rainbow("Server running in 3000 port")));