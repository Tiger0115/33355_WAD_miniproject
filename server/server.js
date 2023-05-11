const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./Routes/authRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

app.listen(8000, () => {
	console.log("Server is running on port 8000");
});
