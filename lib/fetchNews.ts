const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {};

export default fetchNews;

///stepzen import curl "http://api.mediastack.com/v1/news?access_key=30ebc9da8e0b99f43efa13dda581b7a0&sources=business,sports"

///stepzen import curl "http://api.mediastack.com/v1/news?access_key=30ebc9da8e0b99f43efa13dda581b7a0&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"
