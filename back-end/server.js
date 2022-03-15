const mysql = require('mysql2');
const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const fs = require('fs');
var cors = require('cors')
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors())

//connection setting to mysql
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'myChatApp'
})

//make connection when file initially runs
connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to mysql database successfuly.')
    }
})

require('./mysqlRoutes/get')(app, connection);
require('./mysqlRoutes/post')(app, connection);
require('./mysqlRoutes/auth')(app, connection);

app.get('/', (req, res) => {
    res.send('Chat App Api')
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))