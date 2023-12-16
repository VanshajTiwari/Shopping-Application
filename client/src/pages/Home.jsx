import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import ShopByCate from "./Components/shop-by-cate"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div>
            <div className="mb-[70px]">
                <h1 className="font-bold text-[26px]  tracking-widest text-gray-700  ml-6">MEDAL WORTHY BRANDS TO BAG</h1>
            </div>
            <div className="m-6">
                <div className="max-w-[250px] min-h-[267px] bg-pink-400"></div>
                <div className="my-4">
                    <h1 className="font-semibold text-[18px]">Cruelty-Free Peron</h1>
                    <span className=" font-extrabold text-[20px]">BUY 1,GET 1 FREE</span>
                </div>
            </div>
        </div>
        <div>
        <div className="mb-[80px]">
            <h1 className="font-bold text-[26px]  tracking-widest text-gray-700  ml-6">GRAND GLOBAL BRAND</h1>
        </div>
        <div className="m-6">
            <div className="max-w-[250px] min-h-[267px] bg-pink-400"></div>
            <div className="my-4">
                <h1 className="font-semibold text-[18px]">Cruelty-Free Peron</h1>
                <span className=" font-extrabold text-[20px]">BUY 1,GET 1 FREE</span>
            </div>
        </div>
    </div>
    <div>
    <div className="mb-[80px]">
        <h1 className="font-bold text-[26px]  tracking-widest text-gray-700 ml-6">SHOP BY CATEGORY</h1>
    </div>
    <ShopByCate/>
</div>
    <Footer/>
    </div>
  )
}

export default Home
