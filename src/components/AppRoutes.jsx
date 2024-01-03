import React from "react";
import { Routes, Route } from "react-router-dom";

import Sign from "./Sign";
import Chat from "./Chat";
import Login from "./Login";
import Start from "./Start";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/sign" element={<Sign />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;
