import { Text, View } from "react-native";
import {
  IconContact,
  IconHome,
  IconInfo,
  IconNews,
  IconService,
} from "../components/icons";

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
      <View>
        <View>
          <Text>Banner place holder</Text>
        </View>
        <View>
          <Text>Profile Image</Text>
        </View>
        <View>
          <Text>Edit Icon</Text>
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
