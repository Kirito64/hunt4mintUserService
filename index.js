const express = require('express')
const cors = require("cors")
const app = express()
const port = 3002;
const db = require("./config/db")
// db.Sequelize.sync()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.get('/', (req, res) => res.send('Hello World!'))

const userRoutes = require("./routes/userRoutes.js")
app.use("/", userRoutes)

app.listen(port, ()=>console.log(`User Service Listening on port ${port}`));

