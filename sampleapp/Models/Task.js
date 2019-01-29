const Sequelize = require('sequelize');
const db = require('../database/db');

const taskConstant = db.sequelize.define(
    'tbl_tasks', 
    {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        task_name: {
            type: Sequelize.TEXT
        }
},
{
    timestamps: false
})

module.exports = taskConstant;
