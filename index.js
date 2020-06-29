const express = require("express")
const helmet = require("helmet")

const server = express()
const projectsRouter = require("./routes/projects-router")

const port = process.env.PORT || 4000

server.use(express.json())
server.use(helmet())
server.use(projectsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, ()=>{
    console.log(`Server now listening at http://localhost:${port}`)
})