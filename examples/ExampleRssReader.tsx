import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { RssFeedService } from "../services/RssFeedService";
import { RSS_FEED } from "../constants/rss-feed";

export default function ExampleRssReader() {
  const [rssFeedResponse, setRssFeedResponse] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    RssFeedService.getRssFeed(RSS_FEED.BUSINESS)
      .then((data) => {
        setRssFeedResponse(data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    console.log("fetch rss feed");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Example Rss Reader</Text>
      <View style={{ height: 300 }}>
        <ScrollView>
          <Text>{rssFeedResponse}</Text>
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text>Business</Text>
        <Text>Sport</Text>
        <Text>Science</Text>
      </View>
    </View>
  );
}
