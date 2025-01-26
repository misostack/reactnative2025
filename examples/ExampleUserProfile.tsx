import {
  Image,
  ImageBackground,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  IconBadge,
  IconContact,
  IconEdit,
  IconEllipsis,
  IconHome,
  IconInfo,
  IconNews,
  IconService,
} from "../components/icons";
import { IMAGES } from "../constants/images";

export default function ExampleUserProfile() {
  return (
    <View style={{ flex: 1, gap: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <IconHome color="gray" />
        <IconInfo color="gray" />
        <IconNews color="gray" />
        <IconContact color="gray" />
        <IconService color="gray" />
      </View>
      <View style={{ height: 225 }}>
        <View>
          <ImageBackground
            source={IMAGES.STATIC_USERPROFILE_BANNER}
            resizeMode="cover"
            style={{
              height: 150,
            }}
          >
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                marginLeft: 25,
                marginTop: 75,
              }}
              source={IMAGES.STATIC_USERPROFILE_AVATAR}
            />
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => console.log("Edit profile")}
            style={{
              padding: 25,
            }}
          >
            <IconEdit color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ gap: 10 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Sơn Nguyễn Minh
          </Text>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <IconBadge color="black" />
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "blue" }}>
              Digital Marketing Expert
            </Text>
          </View>
          <View>
            <Text>
              Digital Marketing Director @ SONNM.COM | Strategic Thinking |
              Management | Planning
            </Text>
          </View>
          <View>
            <Text
              style={{ color: "gray" }}
              onPress={() => Linking.openURL("https://sonnm.com")}
            >
              sonnm.com
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text>Ho Chi Minh city, Viet Nam</Text>
            <Text>Contact info</Text>
          </View>
          <View>
            <Text>Digital Marketing Consultant</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text>710 followers</Text>
            <Text>500+ Connections</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "blue",
                borderWidth: 1,
                padding: 10,
                borderRadius: 25,
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Open to
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: "blue",
                borderWidth: 1,
                padding: 10,
                borderRadius: 25,
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Text style={{ color: "blue", fontWeight: "bold" }}>
                Add profile section
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 40,
                height: 40,
                borderColor: "gray",
                borderRadius: 40,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconEllipsis color="gray" />
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                borderColor: "blue",
                borderWidth: 1,
                padding: 10,
                borderRadius: 25,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "blue", fontWeight: "bold" }}>
                Enhance Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
