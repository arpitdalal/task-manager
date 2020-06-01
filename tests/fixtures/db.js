const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: "Arpit Test",
    email: "test@gmail.com",
    password: "testpass",
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: "Arpit Test 2",
    email: "test2@gmail.com",
    password: "testpass2",
    tokens: [{
        token: jwt.sign({_id: userTwoId}, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    owner: userOneId,
    description: "Test task",
    completed: false
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    owner: userOneId,
    description: "Test task 2",
    completed: false
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    owner: userTwoId,
    description: "Test task 3",
    completed: false
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()

    await new User(userOne).save()
    await new User(userTwo).save()

    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}