import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  IconContact,
  IconEdit,
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
            resizeMode="contain"
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
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => console.log("Edit profile")}
            style={{
              padding: 15,
            }}
          >
            <IconEdit color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>Profile Headline</Text>
        <Text>Profile Badge</Text>
        <Text>Profile Description</Text>
      </View>
      <View>
        <Text>Website link</Text>
      </View>
      <View>
        <Text>Address</Text>
        <Text>Contact info</Text>
      </View>
      <View>
        <Text>Position</Text>
      </View>
      <View>
        <Text>710 followers</Text>
        <Text>500+ Connections</Text>
      </View>
      <View>
        <Text>Action 1</Text>
        <Text>Action 2</Text>
        <Text>More dropdown</Text>
      </View>
      <View>
        <Text>Button</Text>
      </View>
    </View>
  );
}
