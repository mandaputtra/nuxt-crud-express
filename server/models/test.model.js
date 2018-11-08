const mongoose = require('mongoose');

let TestSchema = mongoose.Schema({
  title: { type: String, required:true }
}, {timestamps: true})

let test = module.exports = mongoose.model('BlogPost', TestSchema)