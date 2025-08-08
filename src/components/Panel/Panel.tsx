import Add from "@mui/icons-material/Add";
import { TextField, Paper, Button } from "@mui/material";
import React from "react";

export const Panel = () => {
  const [inputValue, setInputValue] = React.useState("");

  const onClick = () => {
    console.log("@", inputValue);
    setInputValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };
  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        padding: "25px 30px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        gap: 2,
      }}
    >
      <TextField
        value={inputValue}
        onChange={onChange}
        label="todo discription"
        sx={{ width: "300px" }}
      />

      <Button startIcon={<Add />} variant="outlined" onClick={onClick}>
        ADD
      </Button>
    </Paper>
  );
};
