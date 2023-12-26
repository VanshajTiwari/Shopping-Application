import Navbar from "./Components/Navbar"


const Singup=()=>{
    return(
        <div className="h-[100vh] max-w-full bg-pink-100">
            <Navbar/>
            <div className=" min-h-full flex justify-center items-center">
                    <div className="bg-white w-[400px] rounded-lg">
                        <div className="text-black flex flex-col items-center">
                            <div>
                                <h1 className="text-[40px] font-bold m-4">SignUp</h1>
                                <div className="bg-white h-1 rounded mt-[-10px]"></div>
                            </div>
                            <div className="m-3 flex flex-col items-center"> 
                                <form action="" className="flex flex-col items-center">
                                    <div className="flex flex-col text-[20px] mb-5">
                                        <label htmlFor="username font-bold">Full Name</label>
                                        <input type="text"  id="username" name="username" className=" text-black start-10 pl-4 h-14  border-b-4 focus:bg-gray-200 outline-0 focus:border-yellow-400"/>
                                    </div>
                                    <div className="flex flex-col text-[20px] mb-5">
                                        <label htmlFor="username font-bold">Username</label>
                                        <input type="text"  id="username" name="username" className=" text-black start-10 pl-4 h-14  border-b-4 focus:bg-gray-200 outline-0 focus:border-yellow-400"/>
                                    </div>
                                    <div className="flex flex-col text-[20px] mb-5">
                                        <label htmlFor="username font-bold">Email</label>
                                        <input type="text"  id="username" name="username" className=" text-black start-10 pl-4 h-14  border-b-4 focus:bg-gray-200 outline-0 focus:border-yellow-400"/>
                                    </div>
                                    <div className="flex flex-col text-[20px] mb-8">
                                        <label htmlFor="username font-bold">Confirm Password</label>
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
                                    <a href="" className="text-blue-700 underline"> click here</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Singup;