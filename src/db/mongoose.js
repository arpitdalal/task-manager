const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid!')
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name: 'Keval bapa',
//     email: 'keval_patel@outlook.com'
// })

// me.save().then((result) => console.log(result)).catch((error) => console.log(error))

// const me = new User({
//     name: 'Keval bapa',
//     age: '25'
// }).save().then((result) => console.log(result)).catch((error) => console.log(error))

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})

// const task = new Task({
//     description: 'New task',
//     completed: false
// })

// task.save().then((result) => console.log(result)).catch((error) => console.log(error))

// const task = new Task({
//     description: 'Another task',
//     completed: true
// }).save().then((result) => console.log(result)).catch((error) => console.log(error))