const mongoose = require("mongoose");
const db = require("./index.js");

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
});

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;