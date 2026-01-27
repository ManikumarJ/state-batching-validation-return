import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
  const [user, setUser] = useState({ name: "", age: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Form submitted successfully!"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md border border-blue-100">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">User Details Form</h1>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" value={user.name} onChange={handleInputChange} required />
          <label className="block text-gray-700 font-medium mb-2" htmlFor="age">Age</label>
          <input type="number" id="age" name="age" placeholder="Enter your age" className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" value={user.age} onChange={handleInputChange} required />
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition-colors">Submit</button>
        </form>
        <ToastContainer  />
      </div>
    </div>
  );
};

export default UserProfile;
