const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            // require: true
        },
        tittle: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default: 'to-do'
        },
        tags: {
            type: [
                {
                    type: String,
                    maxlength: 15,
                }
            ],
        },
        created_at: {
            type: Date,
            required: true,
            default: Date.now
        },
        updated_at: {
            type: Date,
            required: true,
            default: Date.now
        }
    }, {
    toJSON: {
        transform: (doc, ret, options) => {
            delete ret.__v;
            return ret;
        },
    }
})

const Todo = mongoose.model('todos', todoSchema);

module.exports = Todo;