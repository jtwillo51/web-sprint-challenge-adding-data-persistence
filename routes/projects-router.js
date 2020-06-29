const express = require("express")
const router = express.Router()

const db = require("../models/project_model")

router.get("/", async (req, res, next)=>{
    try{
       const projects = await db.getProjects()
       res.json(projects)
    } catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next)=>{
    try{
        const project = await db.addProject(req.body)
        res.status(201).json(project)

    } catch(err){
        next(err)
    }
})

router.get("/resources", async (req, res, next)=>{
    try{
        const resources = await db.getResources()
        res.json(resources)

    } catch(err){
        next(err)
    }
})

router.post("/resources", async (req, res, next)=>{
    try{
        const resource = await db.addResource(req.body)
        res.status(201).json(resource)
    } catch(err){
        next(err)
    }
})

router.get("/:id/tasks", async (req, res, next)=>{
    try{
        const tasks = await db.getTasks(req.params.id)
        res.json(tasks)
    } catch(err){
        next(err)
    }
})

router.post("/tasks", async (req, res, next)=>{
    try{
        const task = await db.addTask(req.body)
        res.status(201).json(task)
    } catch(err){
        next(err)
    }
})



module.exports = router