import { Outlet } from "react-router";
import { Nav } from "../shared-components";

export const Layout = () => {
  return (
    <>
      <header className=" lg:flex lg:items-center lg:justify-between shadow-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between">
          <div className="flex items-center">
            <div className="shrink-0 flex items-center justify-between gap-5">
              <img
                alt="Suma"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="size-8"
              />
              <Nav name="Dashboard" to="/" key="dashboard" />
              <Nav name="Todos" to="/todos" key="todos" />
            </div>
          </div>

          <div className="shrink-0">
            <Nav name="Log in" to="/" key="login" />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-4">
        <Outlet />
      </main>
    </>
  );
};
