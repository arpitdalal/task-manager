require('../src/db/mongoose')
const Task = require('../src/models/task')

// 5e5923279666ba34a4d18767
// Task.findByIdAndDelete('5e59238f1c10c519f0ce3789').then(() => {
//     console.log('deleted!')
//     return Task.countDocuments({ completed: false })
// }).then((tasks) => {
//     console.log(tasks)
// }).catch((e) => [
//     console.log(e)
// ])

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return task
}

deleteTaskAndCount('5e594663b9bd3a8d9190d944').then((task) => console.log(task)).catch((e) => console.log(e))