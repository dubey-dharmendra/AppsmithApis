const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/dbConn");
dotenv.config();
const userRouter = require("./routes/docRoutes");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB(process.env.DATABASE_URL);

app.use("/api", userRouter);

app.use("*", () => {
 console.log('Worng Page 404')
});
app.listen(port, () => {
 console.log(`server running on port ${port}...`);
});
