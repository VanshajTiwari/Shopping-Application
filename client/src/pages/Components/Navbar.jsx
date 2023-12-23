import logo from "./../../assets/img/logo-myntra.png";


const Navbar = () => {

  return (
    <header className=" z-20 bg-white min-w-[100vw] flex  justify-around items-center py-5 px-4 shadow-md fixed top-0">
        <div className="">
        
            <img src={`${logo}`} alt="logo" width="130"/>
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
        <div className="flex justify-around items-center min-w-[520px] bg-gray-100 rounded-md valid:bg-white">
        <i className="fa-solid fa-magnifying-glass w-[10%] px-4 text-gray-400"></i>
            <input placeholder="Search for product,branchs and more" className="w-[100%] bg-transparent p-2 focus:outline-0"/>
        </div>
        <div className="min-w-[200px] min-h-[50px]">
            <ul className="absolute flex justify-center gap-x-6 items-center">
                <li>
                    <a className="relative flex flex-col items-center pb-8 hover:border-b-4 hover:border-red-500"  href="#">
                        <i className="fa-regular fa-user"></i>
                        <span className="font-bold text-[13px] text-gray-800">Profile</span>
                        </a>
                </li>
                <li>
                    <a className="relative flex flex-col items-center pb-8" href="#">
                        <i className="fa-regular fa-heart"></i>
                        <span className="font-bold text-[13px] text-gray-800">WishList</span>
                        </a>
                </li>
                <li>
                    <a className="relative flex flex-col items-center pb-8" href="#">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span className="font-bold text-[13px] text-gray-800">Bag</span>
                    </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar;
