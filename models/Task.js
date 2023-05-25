const { db, DataTypes } = require("../db/db")

const Task = db.define("Task", {
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
});

module.exports = { Task }