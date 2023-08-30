import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
  editHandler: (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"]
  ) => void;
};

const TodoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textVal, setTextVal] = useState<string>(todo.title);
  return (
    <div>
      <Paper
        sx={{
          padding: "1rem",
        }}
        variant="elevation"
      >
        <Stack direction={"row"} alignItems={"center"}>
          {editActive ? (
            <TextField
              value={textVal}
              onChange={(e) => setTextVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && textVal !== "") {
                  editHandler(todo.id, textVal);
                  setEditActive(false);
                }
              }}
            />
          ) : (
            <Typography marginRight={"auto"}>{todo.title}</Typography>
          )}
          <Checkbox
            checked={todo.isCompleted}
            onChange={() => completeHandler(todo.id)}
          ></Checkbox>
          <Button
            sx={{
              fontWeight: "600",
            }}
            onClick={() => {setEditActive((prev) => !prev); editHandler(todo.id, textVal);}}
          >{
            editActive?"Done":<Edit />
          }
           
          </Button>
          <Button
            onClick={() => deleteHandler(todo.id)}
            sx={{ opacity: "0.5", color: "black" }}
          >
            <Delete />
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default TodoItem;
