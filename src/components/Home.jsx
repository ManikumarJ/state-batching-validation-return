import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="flex flex-col gap-6 w-full max-w-sm">

        <Link to="/counter">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Counter</h2>
            <p className="text-gray-600">State batching & previous state </p>
          </div>
        </Link>

        <Link to="/user">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">User Profile</h2>
            <p className="text-gray-600">Mutation vs Immutability </p>
          </div>
        </Link>

          <Link to="/multi">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Multi Input Form</h2>
            <p className="text-gray-600">Multi Input Form Handling </p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Home;
