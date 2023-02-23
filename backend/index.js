const express = require('express')
const cors = require('cors')
const productApi = require('./api/productApi')
const db = require('./models')
const createDb = require('./createDB')


const port = 4000;
const app = express();

app.use(cors({
    origin: '*'
}))
app.use('/product', productApi)

createDb()
db.sequelize.sync().then((req) => {
    app.listen(port, () => {
        console.log(`listen to port ${port}`)
    })
})