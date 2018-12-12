var mongoose = require('mongoose');

// mongoose model
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        // minimalna dlugosc stringa
        minlength: 1,
        // trim usuwa "białe znaki" tam gdzie trzeba
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};