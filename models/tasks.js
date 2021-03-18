const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
},{
    timestamps: true
});

// create the model 'Tasks'
const Tasks = mongoose.model('Tasks', taskSchema);

// export the Tasks model
module.exports = Tasks;
