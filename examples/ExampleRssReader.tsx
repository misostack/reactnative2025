import { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RssFeedItem, RssFeedService } from "../services/RssFeedService";
import { RSS_FEED } from "../constants/rss-feed";

export default function ExampleRssReader() {
  const [rssFeedResponse, setRssFeedResponse] = useState<Array<RssFeedItem>>(
    []
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    RssFeedService.parseRssFeed(RSS_FEED.BUSINESS)
      .then((data) => {
        setRssFeedResponse(data);
        console.log(data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    console.log("fetch rss feed");
  }, []);

  return (
    <View style={{ flex: 1, padding: 25, gap: 10 }}>
      <Text style={{ fontWeight: "bold", color: "black", fontSize: 24 }}>
        Example Rss Reader
      </Text>
      <View style={{ flexGrow: 1 }}>
        {rssFeedResponse.length > 0 && (
          <ScrollView>
            <View style={{ flex: 1, gap: 25 }}>
              {rssFeedResponse.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(item.link);
                    }}
                    key={index}
                    style={{
                      flex: 1,
                      gap: 10,
                      borderColor: "black",
                      borderWidth: 1,
                    }}
                  >
                    <ImageBackground
                      source={{
                        uri: encodeURI(item.description.imageUrl),
                      }}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: 200,
                      }}
                    />
                    <View style={{ padding: 10, flex: 1, gap: 10 }}>
                      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        {item.title}
                      </Text>
                      <Text>{item.description.text}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        )}
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text>Business</Text>
        <Text>Sport</Text>
        <Text>Science</Text>
      </View>
    </View>
  );
}
