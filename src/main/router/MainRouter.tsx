import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "../Layout";
import { paths } from "./paths";
import { HomePage } from "../../features/HomePage";
import { TodosPage } from "../../features/todo/pages/Todos";
import { TodoPage } from "../../features/todo/pages/Todo";

const { todos } = paths;

export const MainRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={todos.list} element={<TodosPage />} />
        <Route path={todos.detail(":todoId")} element={<TodoPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
