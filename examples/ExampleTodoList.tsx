import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTodoStore } from "../store/todoStore";
import { useState } from "react";
import { IconCheck, IconDone, IconRemove } from "../components/icons";

interface TodoAddForm {
  title: string;
  category: string;
}

export default function ExampleTodoList() {
  const {
    addTodo,
    removeTodo,
    clearTodos,
    markDone,
    getActiveTodos,
    getCompletedTodos,
  } = useTodoStore();
  const activeTodos = getActiveTodos();
  const completedTodos = getCompletedTodos();
  const [formValue, setFormValue] = useState<TodoAddForm>({
    title: "",
    category: "",
  });

  const onChangeField = (field: keyof TodoAddForm, value: string) => {
    setFormValue({ ...formValue, [field]: value });
  };

  const onAddTodo = () => {
    addTodo({
      id: Math.random().toString(),
      title: formValue.title,
      category: formValue.category,
      completed: false,
    });
    setFormValue({ title: "", category: "" });
  };

  return (
    <View style={{ padding: 10, gap: 20 }}>
      <View>
        <Text style={styles.heading}>Todos</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ width: 120 }}>
          <TextInput
            style={styles.inputText}
            placeholder="Category"
            value={formValue.category}
            onChangeText={(value) => onChangeField("category", value)}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.inputText}
            placeholder="Title"
            value={formValue.title}
            onChangeText={(value) => onChangeField("title", value)}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={onAddTodo} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.heading}>Pending tasks</Text>
        {activeTodos.map((todo) => (
          <View
            key={todo.id}
            style={{ flexDirection: "row", gap: 10, marginTop: 20 }}
          >
            <Text style={{ width: 120 }}>{todo.category}</Text>
            <Text style={{ flex: 1 }}>{todo.title}</Text>
            <TouchableOpacity onPress={() => removeTodo(todo.id)}>
              <IconRemove color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => markDone(todo.id)}>
              <IconCheck color="green" />
            </TouchableOpacity>
          </View>
        ))}
        {activeTodos.length === 0 && (
          <Text>Congratulation! No pending tasks!</Text>
        )}
      </View>
      <View>
        <Text style={styles.heading}>Completed tasks</Text>
        {completedTodos.map((todo) => (
          <View
            key={todo.id}
            style={{ flexDirection: "row", gap: 10, marginTop: 20 }}
          >
            <Text style={{ width: 120 }}>{todo.category}</Text>
            <Text style={{ flex: 1 }}>{todo.title}</Text>
            <IconDone color="green" />
          </View>
        ))}
      </View>
      <View>
        <TouchableOpacity
          onPress={clearTodos}
          style={{ ...styles.button, backgroundColor: "red" }}
        >
          <Text style={styles.buttonText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputText: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  button: {
    padding: 10,
    backgroundColor: "blue",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});
