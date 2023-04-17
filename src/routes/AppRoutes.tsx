import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import Info from "../pages/Info";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:name" element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}