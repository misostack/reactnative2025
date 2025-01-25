import { SafeAreaView, StyleSheet } from "react-native";
import ExampleBoxItems from "./examples/ExampleBoxItems";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ExampleBoxItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
