import { Paper, Box, Typography, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import React from "react";

type Todo = {
  id: number;
  name: string;
  discription: string;
  checked: boolean;
};
interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        marginTop: "15px",
        width: "100%",
        padding: "20px 28px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        gap: 2,
      }}
    >
      <Box textAlign="left">
        <Typography
          sx={{
            cursor: "pointer",
            textDecorationLine: todo.checked ? "line-through" : "none",
          }}
          variant="h5"
          component="h5"
          gutterBottom
        >
          {todo.name}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          {todo.discription}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton
          aria-label="delete"
          color="error"
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};
