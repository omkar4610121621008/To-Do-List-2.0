const { Router } = require("express")
const taskRouter = Router()
const { Task } = require("../models")


taskRouter.get("/", async (req, res) => {
    const tasks = await Task.findAll()
    res.status(200).send({ tasks })
})

taskRouter.get("/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id)
    res.status(200).send({ task })
})

taskRouter.put("/complete/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id)
    await task.update(req.body);
    res.status(200).send({ task })
})


taskRouter.delete("/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id)
    await task.destroy();
    res.status(200).send({ task })
})

module.exports = taskRouter