const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors()); // allow React to call the server

app.get('/image/:id', (req, res) => {
    const id = req.params.id;
    const imagePath = path.join(__dirname, 'images', `${id}.jpg`);
    res.sendFile(imagePath , (err)=>{
        if(err) {
            res.status(404).send("image not found")
        }
    });
});
app.get('/', (req,res)=>{
    res.send("hello fronted this is from backednz")
})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});