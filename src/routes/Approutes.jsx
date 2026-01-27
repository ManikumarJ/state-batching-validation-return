import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Counter from "../components/Counter";
import UserProfile from "../components/UserProfile";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/user" element={<UserProfile />} />
    </Routes>
  );
};

export default Approutes;
