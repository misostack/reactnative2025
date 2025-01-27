import { View, Text, Button } from "react-native";
import { useTodoStore } from "../store/todoStore";

export default function ExampleTodoList() {
  const { addTodo, removeTodo, clearTodos } = useTodoStore();
  const { todos } = useTodoStore((state) => state);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontWeight: "bold", color: "black", fontSize: 24 }}>
        Todo
      </Text>
      <View>
        <Button title="Clear" onPress={clearTodos} />
        <Button
          title="Add"
          onPress={() => {
            addTodo({
              id: Math.random().toString(),
              title: "New Todo",
              completed: false,
              category: "General",
            });
          }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        {todos.map((todo) => (
          <View key={todo.id}>
            <Text>{todo.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
