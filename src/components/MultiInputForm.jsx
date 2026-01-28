import { useState } from "react";

const MultiInputForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4">

        <h2 className="text-xl font-semibold text-center text-blue-600">
          Single Handler Form
        </h2>

        <input className="w-full p-2 border rounded" name="username" value={data.username} onChange={handleChange} placeholder="Username" />

        <input className="w-full p-2 border rounded" name="email" value={data.email} onChange={handleChange} placeholder="Email" />

        <input className="w-full p-2 border rounded" type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit
        </button>

        <div className="border-t pt-3 text-sm">
          <p><strong>Username:</strong> {data.username}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Password:</strong> {data.password}</p>
        </div>

      </form>
      
    </div>
  );
};

export default MultiInputForm;
