// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Something went wrong!\n' + error)
    }

    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'Arpit',
        age: 20
    })
})