import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Counter from "../components/Counter";
import UserProfile from "../components/UserProfile";
import MultiInputForm from "../components/MultiInputForm";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/multi" element={<MultiInputForm/>} />

    </Routes>
  );
};

export default Approutes;
