require("./db/mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const User = require("./Model/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/user", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log("Server is running on " + port);
});
