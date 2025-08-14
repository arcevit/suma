import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <header className=" lg:flex lg:items-center lg:justify-between shadow-sm">
        Header
      </header>
      <main className="container mx-auto px-4 py-4">
        <Outlet />
      </main>
    </>
  );
};
