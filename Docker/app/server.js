const express = require('express');
const app = express();
const port = process.env.PORT || 7000

app.get('/', (req, res) =>{
    res.send("Hello Docker");
});

app.listen(port, () =>{
    console.log(`server running at http://localhost:${port}`);
});

