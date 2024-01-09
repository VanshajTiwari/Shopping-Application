import img from "./../assets/img/pic.jpg";
import UserContext from "../ContextAPI";
import { useContext, useEffect } from "react";
import {Navigate,useNavigate} from "react-router-dom";

const Profile=()=>{
    const {user,setUser}=useContext(UserContext);
    const navigate=useNavigate();
    function handleLogout(){
        setUser(()=>"");
        sessionStorage.removeItem("user")
        navigate("/");
    }
    if(!user)
       return <Navigate to="/"/>
    return(
    <div className="flex justify-center items-center w-full h-screen">
            <div className="max-w-[1100px] min-w-[1100px] max-h-[700px] min-h-[700px] bg-red-400 space-y-5 rounded-lg flex flex-col items-center">
                <div className="max-w-[200px] max-h-[200px] rounded-full overflow-hidden border-[5px] border-red-400  absolute top-0">
                    <img src={img} alt="" className="object-fill w-full h-full"/>

                </div>
                <div className="bg-white w-11/12 rounded-lg min-h-[450px] relative top-[80px] flex flex-col justify-center">
                    <div className="p-12 grid grid-cols-2 text-[20px]">
                      <span className="m-3"><strong>Name : </strong> {user.name}</span>
                      <span className="m-3"><strong>Username : </strong> {user.username}</span>
                      <span className="m-3"><strong>Email : </strong> {user.email}</span>
                      <span className="m-3"><strong>Role : </strong> {user.role}</span>
                      <span className="m-3"><strong>Phone : </strong>9368644771</span>
                      <span className="m-3 whitespace-nowrap"><strong>Address :</strong>NH-2,ChaitanyaVihar,Vrindavan</span>
                      <span className="m-3"><strong>Products In Cart : </strong>{user.cart.length}</span>
                      <span className="m-3"><strong>Orders In Cart : </strong>{user.orders.length}</span>      
                    </div>
                    <div className="flex justify-center">
                        <button className="text-[20px] text-red-400 font-bold border p-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    
    )
};
export default Profile;