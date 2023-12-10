import logo from "./../../assets/img/logo-myntra.png";
const Navbar = () => {
  return (
    <header className="bg-white min-w-[100vw] flex justify-between items-center p-4 shadow-md fixed top-0">
        <div className="">
        
            <img src={logo} alt="logo" width="130"/>
        </div>
        <nav>
            <ul  className="flex items-center font-bold text-gray-700 text-[13px]">
                <li><a href="#" className="mx-4 hover:text-red-500">MEN</a></li>
                <li><a href="#" className="mx-4 hover:text-pink-500">WOMEN</a></li>
                <li><a href="#" className="mx-4 hover:text-orange-700">KIDS</a></li>
                <li><a href="#" className="mx-4 hover:text-yellow-600">HOME & LIVING</a></li>
                <li><a href="#" className="mx-4 hover:text-blue-500">BEAUTY</a></li>
                <li><a href="#" className="mx-4 hover:text-red-500">STUDIO</a></li>

            </ul>
        </nav>
        <div className="flex justify-around items-center min-w-[520px] bg-gray-100 rounded-md valid:bg-white">
        <i className="fa-solid fa-magnifying-glass w-[10%] px-4 text-gray-400"></i>
            <input placeholder="Search for product,branchs and more" className="w-[100%] bg-transparent p-2 focus:outline-0"/>
        </div>
        <div className="flex justify-center items-center gap-x-6 mr-12">
            <div className="flex flex-col items-center"><i className="fa-regular fa-user"></i><span className="font-bold text-[13px] text-gray-800">Profile</span></div>
            <div className="flex flex-col items-center"><i className="fa-regular fa-heart"></i><span className="font-bold text-[13px] text-gray-800">WishList</span></div>
            <div className="flex flex-col items-center"><i className="fa-solid fa-bag-shopping"></i><span className="font-bold text-[13px] text-gray-800">Bag</span></div>
        </div>
    </header>
  )
}

export default Navbar;
