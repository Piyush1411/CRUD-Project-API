const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

const Crud = mongoose.model('Crud', crudSchema)

module.exports = Crud