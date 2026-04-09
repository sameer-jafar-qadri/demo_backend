const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

// image route
app.get("/image/:id", (req, res) => {
    const { id } = req.params;
    const filePath = path.join(__dirname, "images", `${id}.jpg`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("Image not found");
        }
    });
});

// IMPORTANT for Render:
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});