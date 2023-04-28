const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(express.json())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)
const PORT = 8080;
const db = require('./db.js')

// RETURN QUERY DATA

app.get('/:item', async (req, res) => {
    try {
        const { item } = req.body.name
        
        const findResult = await db.getResults;

        response.status(200).json(results.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});