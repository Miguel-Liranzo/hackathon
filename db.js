const Pool = require("pg").Pool;
const pool = Pool( {
    user: 'me',
    host: 'localhost',
    database: 'mcbroken',
    password: 'me',
    port: 5432
});

const getResults = (req, res => {
    const item = req.body.name
    try {
        pool.query('SELECT * FROM store WHERE (SELECT * FROM inventory WHERE item_name = $1)', [item])
        response.status(200).json(res.rows)
    } catch (error) {
        console.error(error.message)
    }
});

module.exports = {
    getResults
}