import { SafeAreaView, StyleSheet } from "react-native";
import ExampleBoxItems from "./examples/ExampleBoxItems";

export default function App() {
  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <ExampleBoxItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
