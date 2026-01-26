const fetchYouTubeNews = require("../services/youtubeService");

exports.getLatestNews = async (req, res) => {
  try {
    const videos = await fetchYouTubeNews();

    const formatted = videos.map((video) => ({
      title: video.snippet.title,
      description: video.snippet.description,
      image: video.snippet.thumbnails.high.url,
      category: "YouTube News",
      publishedAt: video.snippet.publishedAt,
    }));

    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch YouTube news" });
  }
};
