//used in quest model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dialogSchema = new Schema({
    NPC: {
        type: String
    },
    dialogObj: {
        type: Object
    }
});

const Dialog = mongoose.model("Dialog", dialogSchema);
module.exports = Dialog;