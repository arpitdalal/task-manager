const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.sendStatus(500)
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.sendStatus(500)
    }
})

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!user) {
            return res.sendStatus(404)
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find()
        res.send(tasks)
    } catch (e) {
        res.sendStatus(500)
    }
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.sendStatus(500)
    }
})

app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.sendStatus(404)
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log('Server initialized on port ' + port)
})