const express = require("express")
const cors = require("cors")
const app = express()
const userRouter = require("./routes/userRouter")
const taskRouter = require("./routes/taskRouter")
app.use(cors())
app.use(express.json())
app.use("/User", userRouter)
app.use("/Task", taskRouter)

app.listen(5000, (req, res) => {
    console.log("Port 5000")
})

module.exports = app