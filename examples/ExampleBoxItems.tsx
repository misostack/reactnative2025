import { DimensionValue, View, Text, TouchableOpacity } from "react-native";

enum BoxColors {
  Red = "red",
  Green = "green",
  Blue = "blue",
  Orange = "orange",
  Yellow = "yellow",
  Pink = "pink",
  Purple = "purple",
  Brown = "brown",
}

export default function ExampleBoxItems(props: {
  setSelectedItem: (item: string) => void;
}) {
  const { setSelectedItem } = props;
  const items = [
    { color: BoxColors.Red, text: "Item 1" },
    { color: BoxColors.Green, text: "Item 2" },
    { color: BoxColors.Blue, text: "Item 3" },
    { color: BoxColors.Orange, text: "Item 4" },
    { color: BoxColors.Yellow, text: "Item 5" },
    { color: BoxColors.Pink, text: "Item 6" },
    { color: BoxColors.Purple, text: "Item 7" },
    { color: BoxColors.Brown, text: "Item 8" },
  ];
  const height = `${100 / (items.length / 2)}%` as DimensionValue;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "yellow",
        flexWrap: "wrap",
      }}
    >
      {items.map((item, index) => (
        <TouchableOpacity
          onPress={() => setSelectedItem(item.text)}
          key={`box-item-${index}`}
          style={{
            flex: 1,
            flexBasis: "50%",
            height: height,
            backgroundColor: item.color,
            // align text
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
