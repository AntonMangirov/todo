import { Box } from "@mui/material";

import { TodoItem } from "./TodoItem/TodoItem";

const todoList = [
  { id: 1, name: "task1", discription: "test", checked: false },
];

export const TodoList = () => {
  return (
    <Box>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Box>
  );
};
