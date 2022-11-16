const { Sequelize, DataTypes } = require("sequelize")

const db = new Sequelize({
    dialect: "sqlite",
    storage: "./User-Task.sqlite",
    logging: false
})

module.exports = { db, DataTypes }