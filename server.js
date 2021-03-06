const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
})



const port = process.env.PORT || 4545

app.listen(port, () => {
    console.log(`Landing your X-Wing on ${port} `)
});
