import { createBrowserRouter } from "react-router";
import { Home } from "../views/Home";
import { LoginRegister } from "../views/LoginRegister";
import { MainLayout } from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "loginregister",
        Component: LoginRegister,
      },
    ],
  },
]);
