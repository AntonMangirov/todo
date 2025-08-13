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
  const [editTodoId, setEditTodoId] = React.useState<number | null>(null);
  const [todoList, setTodoList] = React.useState<Todo[]>([
    { id: 1, name: "task1", discription: "test", checked: false },
  ]);

  const onEdit = (id: Todo["id"]) => {
    setEditTodoId(id);
  };

  const onSaveEdit = (
    id: number,
    updatedTodo: Omit<Todo, "id" | "checked">
  ) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
    setEditTodoId(null);
  };

  const onDeleteTodo = (id: Todo["id"]) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onAddTodo = ({ name, discription }: Omit<Todo, "id" | "checked">) => {
    const newId =
      todoList.length > 0 ? Math.max(...todoList.map((t) => t.id)) + 1 : 1;
    setTodoList([
      ...todoList,
      { id: newId, name, discription, checked: false },
    ]);
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
          editTodoId={editTodoId}
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
          onEdit={onEdit}
          onChangeTodo={onSaveEdit}
        />
      </Box>
    </div>
  );
};
