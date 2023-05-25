const { Sequelize, DataTypes } = require("sequelize")
const path = require("path")

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "./User-Task.sqlite"),
    logging: false
})

module.exports = { db, DataTypes }