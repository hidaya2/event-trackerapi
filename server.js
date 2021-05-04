const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./config/connectDB")
const eventRoute = require("./routes/eventRoute")
const userRoute = require("./routes/userRoute")
const cors = require("cors")

dotenv.config()

const app = express()

// connection
connectDB()

//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

//routes
app.use("/api/v1/event", eventRoute)
app.use("/api/v1/users", userRoute)

//home route
app.get("/",(req,res) => {
    res.send("<h1>welcome to an event tracker</h1>")
})

const port = process.env.PORT || 5000

app.listen(port,() => console.log(`server started on port ${port}`))