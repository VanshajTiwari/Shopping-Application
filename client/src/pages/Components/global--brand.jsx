import { useEffect } from "react";
import img1 from "./../../assets/Home/global--brand/global--brand--0.png";
import img2 from "./../../assets/Home/global--brand/global--brand--1.png";
import { Link } from "react-router-dom";

const GlobalBrands=()=>{
    useEffect(()=>{
        const dots_global=document.querySelectorAll(".dots-global");
        dots_global.forEach(ele=>{
            ele.addEventListener('click',(e)=>{
                const slide=e.target.getAttribute("data-item");
                const _global_=document.querySelector(".slider--global");
                _global_.style=`transform:translateX(-${slide*100}%)`;
            })
        })
    },[]);
    return(
        <div className="flex flex-col justify-center mb-6">
            <div className="flex overflow-hidden">
                <Link>
                    <div className="slider--global flex transition-all duration-150">
                        <img src={img1} alt="images"/>
                        <img src={img2} alt="image"/>
                    </div>
                </Link>
            </div>
            <div className="flex justify-center gap-x-4 my-3">
                <div className="dots-global p-1 bg-gray-400 rounded-full hover:bg-gray-500" data-item={0} ></div>
                <div className="dots-global p-1 bg-gray-400 rounded-full hover:bg-gray-500" data-item={1} ></div>
            </div>
        </div>
    )
};
export default GlobalBrands;