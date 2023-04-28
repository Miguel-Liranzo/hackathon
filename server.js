const express = require('express')
const app = express();
const PORT = 8080;
const db = require('./db.js')

// RETURN QUERY DATA

    // GRAB TRUTH VALUE OF ICE CREAM MACHINE

app.get('/:id', (req, res) => {
    db.getResults
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});