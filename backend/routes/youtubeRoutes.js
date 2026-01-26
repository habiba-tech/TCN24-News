const express = require("express");
const router = express.Router();
const { getLatestNews } = require("../controllers/youtubeController");

router.get("/youtube-news", getLatestNews);

module.exports = router;
