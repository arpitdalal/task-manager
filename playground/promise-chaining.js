require('../src/db/mongoose')
const User = require('../src/models/user')

// 5e59200972f0b141586d6a02

// User.findByIdAndUpdate('5e59200972f0b141586d6a02', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((totalUsers) => {
//     console.log(totalUsers)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e59200972f0b141586d6a02', 1).then((count) => console.log(count)).catch((e) => console.log(e))