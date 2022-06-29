import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { IndexRoutes } from "./IndexRoutes";



export const Router: FC = memo(() => {
  return (
    <Routes>
      {IndexRoutes.map((route) => (
        <Route key={route.path} index={route.index} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
})
