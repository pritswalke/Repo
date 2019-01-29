
const Sequelize = require('sequelize');
const db = require('../database/db');

const employeeConstant = db.sequelize.define(
    'employees', 
    {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.TEXT
        },
        dept: {
            type: Sequelize.TEXT
        },
        salary: {
            type: Sequelize.STRING
        }
},
{
    timestamps: false
})

module.exports = employeeConstant;


