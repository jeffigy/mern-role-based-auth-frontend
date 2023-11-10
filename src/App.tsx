import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import Login from "./pages/Login";
import Public from "./pages/Public";
import DashLayout from "./components/DashLayout";
import Welcome from "./pages/Welcome";
import Notes from "./pages/Notes";
import Users from "./pages/Users";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />

          <Route path="notes">
            <Route index element={<Notes />} />
          </Route>

          <Route path="users">
            <Route index element={<Users />} />
          </Route>
        </Route>
        {/* End Dash */}
      </Route>
    </Routes>
  );
};
export default App;
