const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide the name"],
        trim:true,
        maxlength:[20, "name more than 20 characters"],

    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Task", taskSchema);