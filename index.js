const express = require('express');
const app = express()
const bodyparser = require('body-parser')
require('./Database/config')
const port = process.env.PORT || 4500;

const book = require('./controller/user/Bookemail')
book()


app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())



//--------router---------------
const user = require('./route/user')
const doctor = require('./route/doctor')
const waste = require('./route/waste')

//---------route-------------
app.use('/user', user)
app.use('/doctor', doctor)
app.use('/waste', waste)


//-------------port-------------
app.listen(port, () => {
    console.log("app is running on port", 4500)
})