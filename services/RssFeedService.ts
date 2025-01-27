import { RSS_FEED } from "../constants/rss-feed";
import { XMLParser } from "fast-xml-parser";

export interface RssFeedItem {
  title: string;
  description: {
    link: string;
    imageUrl: string;
    text: string;
  };
  link: string;
  pubDate: string;
}

const parseDescription = (description: string) => {
  // Extract link
  const linkMatch = description.match(/<a href="([^"]+)"/);
  const link = linkMatch ? linkMatch[1] : null;

  // Extract image URL
  const imgMatch = description.match(/<img src="([^"]+)"/);
  const imageUrl = imgMatch ? imgMatch[1] : null;

  // Extract plain text (after the image tag)
  const textMatch = description.match(/<\/a><\/br>(.*)/);
  const text = textMatch ? textMatch[1].trim() : null;

  return {
    link,
    imageUrl,
    text,
  };
};

const parseRssFeed = (
  rssFeed: string
): Promise<{ data: any; error: Error | null }> => {
  return new Promise((resolve) => {
    try {
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_",
      });
      const result = parser.parse(rssFeed);
      const channel = result.rss.channel;

      console.log("Feed Title:", channel.title);
      console.log("Feed Description:", channel.description);
      console.log("Feed Link:", channel.link);
      console.log("Publication Date:", channel.pubDate);
      console.log("Generator:", channel.generator);

      let items = [];
      if (channel.item) {
        items = Array.isArray(channel.item) ? channel.item : [channel.item];
      }

      resolve({
        data: {
          channel,
          items: items.map((item: any) => ({
            title: item.title,
            description: parseDescription(item.description),
            link: item.link,
            pubDate: item.pubDate,
          })),
        },
        error: null,
      });
    } catch (err) {
      console.error("Error parsing XML:", err);
      resolve({ data: null, error: err as Error });
    }
  });
};

export class RssFeedService {
  static async getRssFeed(feed: RSS_FEED) {
    const rssBaseUrl = process.env.EXPO_PUBLIC_RSS_BASE_URL;
    const response = await fetch(`${rssBaseUrl}/${feed}`);
    const data = await response.text();
    return data;
  }

  static async parseRssFeed(feed: RSS_FEED) {
    const rssFeed = await this.getRssFeed(feed);
    const { data, error } = await parseRssFeed(rssFeed);
    if (error) {
      throw error;
    }
    return data.items;
  }
}
