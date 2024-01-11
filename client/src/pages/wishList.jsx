import Navbar from "./Components/Navbar";
import img1 from "./../assets/img/iphone.jpg";
import { Link } from "react-router-dom";
import UserContext from "../ContextAPI";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserWishList } from "../Api/serverApi";
const Wish=()=>{
    const {user,setUser}=useContext(UserContext);
    const {data,isLoading,error}=useQuery({
        queryKey:['wishList'],
        queryFn:()=>getUserWishList(user.id),
        enabled:true
    })
    if(isLoading){
        return <div className="w-full h-screen bg-red-400 flex justify-center items-center"><div className="loader"></div></div>
     }

    return <>
    <Navbar/>
        <div className="relative top-[100px]">
            <div className="flex flex-col items-center">
                <div className="w-11/12 m-2 shadow-lg  flex">
                    <div className="w-[300px] h-[300px] bg-red-400">
                        <img src={img1} alt="" className="w-full h-full"/>
                    </div>
                    {data?data.map(e=>
                    <div className="m-12 grid grid-cols-3">
                        <div>
                            <span>Name : </span>
                            <span className="font-bold">{e.productname}</span>
                        </div>
                        <div>
                            <span>Brand: </span>
                            <span className="font-bold">{e.brand}</span>
                        </div>
                        <div>
                            <span>price: </span>
                            <span className="font-bold">{e.price}</span>
                        </div>
                        <div>
                            <span>Category: </span>
                            <span  className="font-bold">{e.category}</span>
                        </div>
                        <div>
                            <span>sellers: </span>
                            <div>
                                <span>Name: </span>
                                <span className="font-bold">Vanshaj Tiwari</span>
                            </div>
                            <div>
                                <span>Name:</span>
                                <span className="font-bold">Vishal Singhal</span>
                            </div>
                        </div>
                        <div>
                            <span>Contact: </span>
                            <span className="font-bold">9XXXXXXXXXX</span>
                        </div>
                        <Link className="text-[60px] absolute top-0 right-[100px]">&times;</Link>
                    </div>
                    ):<div>NOTHING IN WISHLIST</div>}
                </div>
                
            </div>
        </div>
    </>

}

export default Wish;