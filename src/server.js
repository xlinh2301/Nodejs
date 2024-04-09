require('dotenv').config(); // load env
const express = require('express'); // import express.js module
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web'); // import web routes
const connection = require('./config/database');


const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
//convert json->object
app.use(express.json()) //for json
app.use(express.urlencoded({ extended: true })) // for form data 

//config template engine from viewEngine.js
configViewEngine(app);

//khai bao route
app.use('/', webRouters)


// TEST CONNECTION

// A simple SELECT query
// connection.query(
//   'SELECT * FROM Users u ',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//   }
// );


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})