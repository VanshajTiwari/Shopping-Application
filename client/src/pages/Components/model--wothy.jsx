import img0 from "./../../assets/Home/medal--worthy/medal--worthy--0.png";
import img1 from "./../../assets/Home/medal--worthy/medal--worthy--1.png";
import img2 from "./../../assets/Home/medal--worthy/medal--worthy--2.png";
import img3 from "./../../assets/Home/medal--worthy/medal--worthy--3.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const WorthyBrands=()=>{
    useEffect(()=>{
        const dots_model=document.querySelectorAll(".slider-model-botton");
        dots_model.forEach(ele=>{
            ele.addEventListener('click',(e)=>{
                console.log("do")
                const slide=e.target.getAttribute("data-item");
                const _global_=document.querySelector(".slider--model");
                _global_.style=`transform:translateX(-${slide*100}%)`;
            })
        })
    },[]);
    return(
    <div className="flex flex-col justify-center items-center">
            <div className="overflow-hidden">
                <Link>
                    <div className="flex slider--model transition-all duration-200 w-full">
                        <img src={img0} alt={img0} className=" object-fill"/>
                        <img src={img1} alt={img1} className=" object-fill"/>
                        <img src={img2} alt={img2} className=" object-fill"/>
                        <img src={img3} alt={img3} className=" object-fill"/>
                    </div>
                </Link>
            </div>
            <div className="flex gap-x-3 my-6 ">
                <div className="p-1 slider-model-botton bg-gray-400 hover:bg-gray-500 rounded-full" data-item={0}></div>
                <div className="p-1 slider-model-botton bg-gray-400 hover:bg-gray-500 rounded-full" data-item={1}></div>
                <div className="p-1 slider-model-botton bg-gray-400 hover:bg-gray-500 rounded-full" data-item={2}></div>
                <div className="p-1 slider-model-botton bg-gray-400 hover:bg-gray-500 rounded-full" data-item={3}></div>
            </div>
    </div>
    )
}
export default WorthyBrands;