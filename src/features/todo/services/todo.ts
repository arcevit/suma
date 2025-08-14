import { useAuthQuery } from "../../../utils/api-utils/queryHelper";
import { todoConfig } from "../config/config";
import type { ITodo } from "../models/todo";

export const useGetTodos = () => {
  const { url, queryKey } = todoConfig.todos;

  return useAuthQuery(queryKey, (axiosInstance) => {
    return axiosInstance.get<Array<ITodo>>(url);
  });
};
