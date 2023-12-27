import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Signup = () => {
  return (
    <div className="h-[100vh] max-w-full bg-pink-100">
      <Navbar />
      <div className="min-h-full flex justify-center items-center mt-16">
        <div className="bg-white w-[500px] rounded-lg">
          <div className="text-black flex flex-col items-center">
            <div>
              <h1 className="text-[40px] font-bold m-4">SignUp</h1>
              <div className="bg-white h-1 rounded mt-[-10px]"></div>
            </div>
            <div className="m-3">
              <form action="" className="grid grid-cols-2 gap-4 items-center">
                <div className="flex flex-col text-[20px] mb-5">
                  <label htmlFor="fullName" className="font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="text-black text-base pl-4 h-14 border-b-4 focus:bg-gray-200 outline-0 focus:border-yellow-400"
                  />
                </div>
                <div className="flex flex-col text-[20px] mb-5">
                  <label htmlFor="username" className="font-bold">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="text-black text-base pl-4 h-14 border-b-4 focus:bg-gray-200 outline-0 focus:border-yellow-400"
                  />
                </div>
                <div className="flex flex-col text-[20px] mb-5 col-span-2">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="text-black text-base pl-4 h-14 border-b-4 focus:bg-gray-200 outline-0 focus:border-yellow-400"
                  />
                </div>
                <div className="flex flex-col text-[20px] mb-5">
                  <label htmlFor="password" className="font-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="text-black text-base pl-4 h-14 border-b-4 focus:bg-gray-200 outline-0 focus:border-yellow-400"
                  />
                </div>
                <div className="flex flex-col text-[20px] mb-5">
                  <label htmlFor="confirmPassword" className="font-bold">
                  Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="text-black text-base pl-4 h-14 border-b-4 focus:bg-gray-200 outline-0 focus:border-yellow-400 w-full"
                  />
                </div>
                <div className="pb-9 col-span-2">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="bg-gray-400 text-[25px] font-bold w-full hover:cursor-pointer rounded-lg py-2 transitiono-all duration-100 hover:scale-105"
                  />
                </div>
              </form>
              <div className="w-full flex justify-start items-start">
                <span>Already Registered ? &nbsp;</span>
                <Link to="/login" className="text-blue-700 underline">
                  Click here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
