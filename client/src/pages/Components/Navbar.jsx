import { Link, useNavigate} from "react-router-dom";
import logo from "./../../assets/img/logo-myntra.png";
import UserContext from "../../ContextAPI";
import { useContext } from "react";
const Navbar = () => {
    const {user,setUser}=useContext(UserContext);
    const navigate=useNavigate();
    function handleLogout(){
        setUser(()=>"");
        sessionStorage.removeItem("user")
        navigate("/");
    }
  return (
    <header className=" z-20 bg-white min-w-[100vw] flex  justify-around items-center py-5 px-4 shadow-md fixed top-0">
        <div className="">
            <Link to="/">
            <img src={`${logo}`} alt="logo" width="130"/>
            </Link>
        </div>
        <nav>
            <ul  className="flex items-center font-bold text-gray-700 text-[13px]">
                <li><a href="#" className="mx-4 hover:text-red-500 pb-9 hover:border-b-4 hover:border-red-500">MEN</a></li>
                <li><a href="#" className="mx-4 hover:text-pink-500 pb-9 hover:border-b-4 hover:border-pink-500">WOMEN</a></li>
                <li><a href="#" className="mx-4 hover:text-orange-700 pb-9 hover:border-b-4 hover:border-orange-700">KIDS</a></li>
                <li><a href="#" className="mx-4 hover:text-yellow-600 pb-9 hover:border-b-4 hover:border-yellow-600">HOME & LIVING</a></li>
                <li><a href="#" className="mx-4 hover:text-blue-500 pb-9 hover:border-b-4 hover:border-blue-500">BEAUTY</a></li>
                <li><a href="#" className="mx-4 hover:text-red-500 pb-9 hover:border-b-4 hover:border-red-500">STUDIO</a></li>

            </ul>
        </nav>
        <div className="flex justify-around  items-center min-w-[520px] bg-gray-100 rounded-md valid:bg-white">
            <i className="fa-solid fa-magnifying-glass w-[10%] px-4 text-gray-400"></i>
            <input placeholder="Search for product,branchs and more" className="w-[100%] bg-transparent p-2 focus:outline-0"/>
        </div>
        <div className="min-w-[200px] min-h-[50px]">
            <ul className="absolute flex justify-center gap-x-6 items-center">
                {user?<><li className="whitespace-nowrap capitalize relative pb-8 flex flex-col border-b-4 border-transparent items-center hover:hover:border-pink-500 profile--bottom">
                    <Link to="/profile" className="flex flex-col items-center justify-center"><i className="fa-regular fa-user"></i>
                    <span className="font-bold text-[13px] text-gray-800">{user.name}</span></Link>
                    <div className="absolute top-[70px] bg-white border justify-center items-center p-2 hidden hover:block divide-y hover--profile--content">
                        <div className="min-w-[50px] text-[13px] m-3">
                            <Link to="/" onClick={handleLogout} className="text-pink-500 font-semibold border px-3 py-2">Logout</Link>
                        </div>
                    </div>
                </li></>:

                <li className="relative pb-8 flex flex-col border-b-4 border-transparent items-center hover:border-pink-500 profile--bottom">
                    
                    <i className="fa-regular fa-user"></i>
                    <span className="font-bold text-[13px] text-gray-800">Profile</span>
                    <div className="absolute top-[70px] bg-white border p-2 hidden hover:block divide-y hover--profile--content">                    
                        <div className="min-w-[250px] text-[13px] m-3">
                            <h1 className="font-bold">Welcome</h1>
                            <p className=" whitespace-nowrap">To access account and manage orders</p>
                            <div className="my-6">
                            <Link to="/login" className="text-pink-500 font-semibold border px-3 py-2">LOGIN/SIGNUP</Link>
                            </div>
                        </div>
                        <div className="flex flex-col text-gray-600 text-[13px] gap-y-2 m-3 py-1">
                            <Link className="hover:underline">Orders</Link>
                            <Link className="hover:underline">Wishlist</Link>
                            <Link  className="hover:underline">Gift Cards</Link>
                            <Link className="hover:underline">Contact Us</Link>
                            <Link className="hover:underline">Myntra Insider</Link>
                        </div>
                        <div className="flex flex-col text-gray-600 text-[13px] gap-y-2 m-3 py-1">
                            <Link className="hover:underline">Myntra Credit</Link>
                            <Link className="hover:underline">Coupons</Link>
                            <Link className="hover:underline">Saved Cards</Link>
                            <Link className="hover:underline">Saved VPA</Link>
                            <Link className="hover:underline">Saved addresses</Link>
                        </div>
                    </div> 
                </li>}
      
                <li className="relative pb-9 ">
                    <Link className="flex flex-col items-center">
                        <i className="fa-regular fa-heart"></i>
                        <span className="font-bold text-[13px] text-gray-800">WishList</span>
                    </Link>
              
                </li>
                <li className="relative  pb-9" >
                        <Link className="flex flex-col items-center">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span className="font-bold text-[13px] text-gray-800">Bag</span>
                        </Link>
               
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar;
