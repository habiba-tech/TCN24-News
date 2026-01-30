const axios = require("axios");

const fetchYouTubeNews = async () => {
  const url = `https://www.googleapis.com/youtube/v3/search`;

  const response = await axios.get(url, {
    params: {
      part: "snippet",
      channelId: process.env.CHANNEL_ID, 
      maxResults: 10,
      order: "date",
      type: "video",
      key: process.env.YOUTUBE_API_KEY,
    },
  });

  return response.data.items;
};

module.exports = fetchYouTubeNews;
