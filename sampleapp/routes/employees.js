const express = require('express');
const router = express.Router();
// Using Sequelize Model for Employee table
const Employee = require('../Models/Employee');

// Route to GET all Employes
router.get("/employees", function(req,res){
    Employee.findAll()
    .then(employees => {
        res.json(employees);
    })
    .catch(err =>{
        res.send('Error: '+ err);
    })
})

// Route to GET Employee specific to the requested id
router.get("/employee/:id", function(req, res){
    Employee.findById(req.params.id)
    .then(employee => {
        res.json(employee);
    })
    .catch(err => {
        res.send('Error: '+ err);
    })
})

// Route to POST an Eployee
router.post("/employee",
function(req,res) {
    console.log(req.body);
    if(!req.body )
    {
        res.status(400);
        res.json({error: 'Bad Data'});
    }
    else
    {
        Employee.create(req.body)
        .then(data =>{
            res.send(data)
        })
        .catch( err => {
            res.json('error:' + err);
        })
}
})

// route to DELETE a specific Employee
router.delete("/employee/:id", function(req, res) {
    Employee.destroy({
        where: {
            id: req.params.id   
        }
    })
    .then(() => {
        res.json({ status: 'Employee Deleted!'})
    })
    .catch( err => {
        res.json('error' + err);
    })
})

// route to UPDATE a specific Employee
router.put("/employee/:id", function(req, res) {
   if(!req.body){
        req.status(400);
        res.json({
            error: 'Bad Data'
        })
   }
   else{
    Employee.update(
        {
            name: req.body.name,
            dept: req.body.dept,
            salary: req.body.salary
         },
        { where: { id: req.body.id}}
    )
    .then(() => {
        res.json({ status: 'Employee Updated!'})
    })
    .catch( err => {
        res.json('error:' + err);
    })
   }
})

module.exports =  router;