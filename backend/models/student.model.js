const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    username: { type: String, required: true },
    subject: { type: String, required: true },
    classDuaration: { type: Number, required: true },
    date: { type: Date, required: true}
  }, {
    timestamps: true
  });



const Student = mongoose.model('Student', studentSchema);
module.exports = Student;