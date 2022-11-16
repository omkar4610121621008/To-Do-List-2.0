const { db, DataTypes } = require("../db")

const Task = db.define("tasks", {
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
});

module.exports = { Task }