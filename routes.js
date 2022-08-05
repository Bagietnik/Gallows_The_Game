const express = require("express");
const recordModel = require("./models");
const app = express();

app.post("/add_record", async (request, response) => {
    const record = new recordModel(request.body);
    try {
      await record.save();
      response.send(record);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/records", async (request, response) => {
    const records = await recordModel.find({});
  
    try {
      response.send(records);
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = app;