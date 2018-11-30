var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    subject: String,
    published_date: { type: Date, default: Date.now  }
}, { versionKey: '_somethingElse' });

module.exports = mongoose.model('book', bookSchema);
