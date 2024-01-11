import { useQuery } from "@tanstack/react-query"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import GlobalBrands from "./Components/global--brand"
import WorthyBrands from "./Components/model--wothy"
import ShopByCate from "./Components/shop-by-cate"
import { getProducts } from "../Api/serverApi"
import Cookies from 'universal-cookie';
const Home = () => {
    const cookies=new Cookies();
    console.log(cookies.cookies['connect.sid']);
    const {data,error,isLoading}=useQuery({
        queryKey:['products'],
        queryFn:getProducts
    });
    if(isLoading){
       return <div className="w-full h-screen bg-red-400 flex justify-center items-center"><div className="loader"></div></div>
    }
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div>
            <div className="mb-[70px]">
                <h1 className="font-bold text-[26px]  tracking-widest text-gray-700  ml-6">MEDAL WORTHY BRANDS TO BAG</h1>
            </div>
            <WorthyBrands/>
        </div>
        <div>
            <div className="mb-[80px]">
                <h1 className="font-bold text-[26px]  tracking-widest text-gray-700  ml-6 ">GRAND GLOBAL BRAND</h1>
            </div>
            <GlobalBrands/>
        </div>
    <div>
    <div className="mb-[40px]">
        <h1 className="font-bold text-[26px]  tracking-widest text-gray-700 ml-6">SHOP BY CATEGORY</h1>
    </div>
    <ShopByCate/>
</div>
    <Footer/>
    </div>
  )
}

export default Home
