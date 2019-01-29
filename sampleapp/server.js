const express = require('express');
const bodyParser =  require('body-parser');

/**
 *  Employees.js file which stores all the requires routes
 and performs the required operation
 *  */
const employees = require('./routes/employees');
const cors = require('cors');
const port =5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Route to use when '/api/*' appears in the url
app.use("/api", employees);

app.listen(port, function(){
    console.log('Server started...');
})