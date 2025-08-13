import React from "react";
import { Box } from "@mui/material";
import { Header, Panel, TodoList } from "./components";
import "./App.css";

export type Todo = {
  id: number;
  name: string;
  discription: string;
  checked: boolean;
};

export const App = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([
    { id: 1, name: "task1", discription: "test", checked: false },
  ]);

  const onDeleteTodo = (id: Todo["id"]) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onAddTodo = ({ name, discription }: Omit<Todo, "id" | "checked">) => {
    const newId =
      todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;

    const newTodo: Todo = {
      id: newId,
      name,
      discription,
      checked: false,
    };

    setTodoList([...todoList, newTodo]);
  };

  const onCheckTodo = (id: Todo["id"]) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="App">
      <Box display="flex" flexDirection="column" width="500px">
        <Header />
        <Panel onAddTodo={onAddTodo} />
        <TodoList
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
        />
      </Box>
    </div>
  );
};
