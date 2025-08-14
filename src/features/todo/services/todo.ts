import {
  useAuthMutation,
  useAuthQuery,
} from "../../../utils/api-utils/queryHelper";
import { todoConfig } from "../config/config";
import type { ITodo } from "../models/todo";

export const useGetTodos = () => {
  const { url, queryKey } = todoConfig.todos;

  return useAuthQuery(queryKey, (axiosInstance) => {
    return axiosInstance.get<Array<ITodo>>(url);
  });
};

export const useGetTodoById = ({
  id,
  enabled,
}: {
  id: string;
  enabled?: boolean;
}) => {
  const { url, queryKey } = todoConfig.todoById;
  const _enabled = enabled && !!id;
  return useAuthQuery(
    queryKey(id),
    (axiosInstance) => {
      return axiosInstance.get<ITodo>(url(id));
    },
    {
      enabled: _enabled,
    }
  );
};

export const useAddTodo = () => {
  const { url } = todoConfig.addTodo;

  return useAuthMutation<ITodo, Omit<ITodo, "id">>(url);
};
