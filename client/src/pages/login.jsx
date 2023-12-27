import Navbar from "./Components/Navbar"
import { Link } from "react-router-dom";

const Login=()=>{
    return(
        <div className="h-[100vh] max-w-full bg-pink-100">
            <Navbar/>
            <div className=" min-h-full flex justify-center items-center">
                    <div className="bg-white w-[500px] rounded-lg">
                        <div className="text-black flex flex-col items-center">
                            <div>
                                <h1 className="text-[40px] font-bold m-4">Login</h1>
                                <div className="bg-white h-1 rounded mt-[-10px]"></div>
                            </div>
                            <div className="mt-5 p-6 flex flex-col items-center"> 
                                <form action="" className="flex flex-col items-center">
                                    <div className="flex flex-col text-[20px] mb-5">
                                        <label htmlFor="username font-bold">Username or Email</label>
                                        <input type="text"  id="username" name="username" className=" text-black start-10 pl-4 h-14  border-b-4 focus:bg-gray-200 outline-0 focus:border-yellow-400"/>
                                    </div>
                                    <div className="flex flex-col text-[20px] mb-8">
                                        <label htmlFor="username font-bold">Password</label>
                                        <input type="text"  id="username" name="username" className=" text-black start-10 pl-4 h-14  border-b-4 focus:bg-gray-200 outline-0 focus:border-yellow-400"/>
                                    </div>
                                    <div className=" pb-9">
                                        <input type="submit" value="Login" className="bg-gray-400 text-[25px] font-bold  w-64 hover:cursor-pointer rounded-lg py-2  transitiono-all  duration-100 hover:scale-105"/>
                                    </div>
                                </form>
                                <div className="w-full flex justify-start items-start" >
                                    <span>New to this page ? &nbsp;</span>
                                    <Link to="/signup" className="text-blue-700 underline"> click here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Login;