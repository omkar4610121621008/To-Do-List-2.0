const express = require("express")
const app = express()
const userRouter = require("./routes/userRouter")
const taskRouter = require("./routes/taskRouter")

app.use(express.json())
app.use("/User", userRouter)
app.use("/Task", taskRouter)

app.listen(3000, (req, res) => {
    console.log("Port 3000")
})

module.exports = app