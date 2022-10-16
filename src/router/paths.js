/** @format */

import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Info from "../features/ProfileInfo/Info";

export const Paths = () => {
  return (
    <div>
      <Routers>
        <Routes>
          <Route path='/' element={<Info />} />
        </Routes>
      </Routers>
    </div>
  );
};
