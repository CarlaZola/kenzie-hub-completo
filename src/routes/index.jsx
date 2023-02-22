import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import Register from "../pages/Register";
import TechProvider from "../providers/TechContext";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/profile" element={<ProtectedRoutes />}>
        <Route index element={
            <TechProvider>
                <Profile />
            </TechProvider>} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
