const mongoose = require('mongoose')

const ClintSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const ClintModel = mongoose.model("clints", ClintSchema)
module.exports = ClintModel