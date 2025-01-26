import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ExampleBoxItems from "./examples/ExampleBoxItems";
import { useState } from "react";
import ExampleUserProfile from "./examples/ExampleUserProfile";

export default function App() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      {selectedItem && (
        <View style={{}}>
          <Text>Selected Item : {selectedItem}</Text>
        </View>
      )}
      <ExampleBoxItems setSelectedItem={setSelectedItem} />
      <ExampleUserProfile />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
