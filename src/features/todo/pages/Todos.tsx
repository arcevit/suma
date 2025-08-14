import { useNavigate } from "react-router";
import {
  Button,
  Checkbox,
  H1,
  List,
  ListItem,
} from "../../../shared-components";
import { useGetTodos } from "../services/todo";
import { paths } from "../../../main/router/paths";
import { useQueryClient } from "@tanstack/react-query";
import { todoConfig } from "../config/config";
import type { ITodo } from "../models/todo";

const {
  todos: { detail: detailPath },
} = paths;
const { queryKey } = todoConfig.todos;

export const TodosPage = () => {
  const { data, isLoading, isError } = useGetTodos();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const todos: ITodo[] =
    //@ts-expect-error: it is expected to have ?.data
    data?.data || queryClient.getQueryData(queryKey)?.data || [];

  if (isLoading)
    return <div className="mx-auto max-w-4xl pt-5">Loading...</div>;
  if (isError)
    return <div className="mx-auto max-w-4xl pt-5">Error loading todos</div>;

  return (
    <>
      <H1 text={"Todo list"} />
      <div className="mx-auto max-w-4xl pt-5">
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <div className="flex min-w-0 gap-x-4">
                <Checkbox
                  label={todo.title}
                  defaultChecked={!!todo.completed}
                />
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <Button
                  text="View detail"
                  variant="outline"
                  onClick={() => navigate(detailPath(todo.id))}
                />
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
