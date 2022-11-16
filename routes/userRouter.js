const { Router } = require("express")
const userRouter = Router()
const { User } = require("../models")
const { Task } = require("../models")

userRouter.get("/", async (req, res) => {
    const users = await User.findAll()
    res.status(200).send({ users })
})

userRouter.get("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.status(200).send({ user })
})

userRouter.get("/:id/tasks", async (req, res) => {
    //const userTasks = await Task.findAll({ where : { userId : req.params.id}})
    res.status(200).send({ userShows })
})

userRouter.put("/:User_Id/task/:Task_Id", async(req, res) => {
    const user = await User.findByPk(req.params.User_Id)
    const task = await Task.findByPk(req.params.Task_Id)
    await task.setUser(user)
    res.status(200).send({ user })
})

module.exports = userRouter