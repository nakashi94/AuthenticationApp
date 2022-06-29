import { Account, AccountSetting, Page404, SignIn, SignUp } from "../pages";
import { Route } from "../types/Route";

export const IndexRoutes: Array<Route> = [
  {
    index: true,
    path: "/",
    element: <Account />
  },
  {
    index: false,
    path: "/account_setting",
    element: <AccountSetting />
  },
  {
    index: false,
    path: "/sign_in",
    element: <SignIn />
  },
  {
    index: false,
    path: "sign_up",
    element: <SignUp />
  },
  {
    index: false,
    path: "*",
    element: <Page404 />
  },
]
