const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    category: { type: String, required: true },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
