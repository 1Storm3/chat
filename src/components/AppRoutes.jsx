import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Main";
import Chat from "./Chat";
import RequestBD from "./RequestBD";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/request" element={<RequestBD />} />
  </Routes>
);

export default AppRoutes;
