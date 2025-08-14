import { useState } from "react";
import { Button, Input } from "../../../shared-components";
import { useAddTodo } from "../services/todo";
import { useQueryClient } from "@tanstack/react-query";
import { todoConfig } from "../config/config";
import type { ITodo } from "../models/todo";

const { queryKey } = todoConfig.todos;
const USER_ID = 1;

export const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const queryClient = useQueryClient();

  const { mutate, isPending } = useAddTodo();

  const handleAddTodo = () => {
    if (!inputText.trim()) return;

    mutate(
      { title: inputText, completed: false, userId: USER_ID },
      {
        onSuccess: async (data) => {
          //queryClient.invalidateQueries(queryKey)
          // Update the query cache with the new todo, it is not required in real senario, queryClient.invalidateQueries(queryKey) will be enough
          queryClient.setQueryData(queryKey, (oldData: { data: ITodo[] }) => {
            return {
              ...oldData,
              data: [data, ...oldData.data],
            };
          });
        },
        onError: (error) => {
          console.error(error.response?.data.message || "Add todo failed");
        },
      }
    );

    setInputText("");
  };

  return (
    <div className="pt-2 pb-5 flex gap-x-5">
      <Input
        placeholder="Add todo"
        name="addtodo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button text="Add" onClick={handleAddTodo} isLoading={isPending} />
    </div>
  );
};
