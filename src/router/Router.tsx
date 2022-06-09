import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
});
