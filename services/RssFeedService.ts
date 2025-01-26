import { RSS_FEED } from "../constants/rss-feed";

export class RssFeedService {
  static async getRssFeed(feed: RSS_FEED) {
    const rssBaseUrl = process.env.EXPO_PUBLIC_RSS_BASE_URL;
    const response = await fetch(`${rssBaseUrl}/${feed}`);
    const data = await response.text();
    return data;
  }
}
