const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  keyword: {
    type: String,
  },
});

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;