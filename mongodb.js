// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Something went wrong!\n' + error)
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ name: { $regex: RegExp('Kev', 'i') } }, (error, user) => {
    //     if (error) {
    //         return console.log('Something went wrong!' + error)
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 25 }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 25 }).count((error, countUsers) => {
    //     console.log(countUsers)
    // })

    db.collection('tasks').findOne({ _id: ObjectID("5e57f4a127620c1bfcec499d") }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
})