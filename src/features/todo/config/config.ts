export const baseUrl =
  import.meta.env.VITE_BASE_URL || "https://jsonplaceholder.typicode.com";

export const todoConfig = {
  todos: {
    url: `${baseUrl}/todos?_page=1&_limit=20`,
    queryKey: ["Todos"],
  },
  todoById: {
    url: (id: string) => {
      return `${baseUrl}/todos/${id}`;
    },
    queryKey: (id: string) => ["todos", id],
  },
  addTodo: {
    url: `${baseUrl}/todos`,
  },
};
