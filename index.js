const express = require('express')
const app = express()
require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

/**============================ Log ============================ */
const morgan = require('morgan')
app.use(morgan('dev'))

/**============================ Router ============================ */
const routers = require('./src/routes/index')
app.use('/pos/api/v1', routers)

app.get("*", (req, res) =>{
    res.status(404).send("Path Not Found !")
})

/**============================ MySql ============================ */
const connection = require('./src/helpers/database')
connection.connect(error => {
    if(error) throw error;
    console.log("Database Has Connected!")
})

/**============================ Server ============================ */
const port = process.env.PORT
app.listen(port, () =>{
    console.log(`listening to the port : ${port}`)
})
