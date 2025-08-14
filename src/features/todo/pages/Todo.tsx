import { useParams } from "react-router";
import { useGetTodoById } from "../services/todo";
import { Badge, H1 } from "../../../shared-components";

export const TodoPage = () => {
  const params = useParams<{ todoId: string }>();

  const { data, isLoading, isError } = useGetTodoById({
    id: params.todoId || "",
  });
  const todo = data?.data;

  if (isLoading)
    return <div className="mx-auto max-w-4xl pt-5">Loading...</div>;
  if (isError)
    return <div className="mx-auto max-w-4xl pt-5">Error loading todos</div>;
  return (
    <div className="flex flex-row items-center gap-5">
      <H1 text={todo?.title || "Current todo"} />
      <Badge
        text={todo?.completed ? "Completed" : "Not Completed"}
        color={todo?.completed ? "green" : "yellow"}
      />
    </div>
  );
};
