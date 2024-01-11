import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Link, useParams } from "react-router-dom";
import img1 from "./../assets/img/shirt.jpg"
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../Api/serverApi";
const ProductDetails=()=>{
    const {id}=useParams();
    const {data,error,isLoading}=useQuery({
        queryKey:['productDetails'],
        queryFn:()=>getProduct(id),
        enabled:true
    });
    if(isLoading){
        return <div className="w-full h-screen bg-red-400 flex justify-center items-center"><div className="loader"></div></div>
    }
    return(
        <div>
            <Navbar/>
            <div className="relative mt-[130px]">
                <div className="relative left-12">
                    <Link href="">Home/Clothing/Men Clothing/Shirts/<strong>{data.productname} &gt; {data.brand}</strong></Link>
                </div>
                <div className="flex">
                    <div className="w-[60%] m-12">
                        <img src={img1} alt="" />
                    </div>
                    <div className="w-[50%] m-12">
                        <div className="divide-y">
                            <div className="pb-4 pt-2">
                                <h1 className="text-[22px] font-bold">{data.productname}</h1>
                                <p className=" font-normal text-gray-600">{data.summary}</p>
                                <div className="border max-w-[100px] p-2 mt-2">{data.ratingAverage}</div>
                            </div>
                            <div className="mt-4 pt-4">    
                                <div className="flex space-x-1 text-[20px]">
                                    <span className="font-extrabold">$989</span>
                                    <span className="text-gray-500 pl-2">MRP</span>
                                    <span className="text-gray-500 pr-5 line-through">{data.price}</span>
                                    <span className="text-orange-400 font-bold">{"(55% OFF)"}</span>
                                </div>
                                <div className="text-green-500 font-bold">inclusive of all taxes</div>
                                <div className="font-bold my-5">Select Size</div>
                                <div className="flex space-x-6 mb-5">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full border">39</div>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full border">40</div>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full border">42</div>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full border">44</div>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full border">46</div>

                                </div>
                                <div className="space-x-4 mb-8">
                                    <button className="bg-pink-400 p-3 text-17px min-w-[300px] rounded-md font-bold text-white">ADD TO BAG</button>
                                    <button className="border p-3 text-17px min-w-[300px] rounded-md font-bold">WISHLIST</button>
                                </div>
                            </div>
                        </div>
                        <div className="border w-full my-2"></div>
                        <div className="font-bold">DELIVERY OPTIONS</div>
                        <div className="border p-2 rounded-lg max-w-[270px] flex"><input type="text" placeholder="Enter pincode"/><button className="text-pink-500">check</button></div>
                        <p className="text-[13px] my-1">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                        <ul className="mt-4 mb-10">    
                                <li>100% Original Products</li>
                                <li>Pay on delivery might be available</li>
                                <li>Easy 14 days returns and exchanges</li>
                                <li>Try & Buy might be available</li>
                        </ul>
                        <h1 className=" font-bold">BEST OFFERS</h1>
                        <div className="mt-5 text-[14px]">
                            <span className="text-orange-400 font-bold"><span className="text-black">Best Price:</span> Rs. 824</span>
                        </div>
                        <ul className="ml-5 list-disc">
                            <li>Coupon code: MYNTRA200</li>
                            <li>{"Coupon Discount: Rs 165 off(check cart for final savings)"}</li>
                            <li>{"Applicable on: Orders above Rs. 1199(only on first purchase)"}</li>
                        </ul>
                        <h2 className="text-pink-400 mt-5 mb-6 font-bold text-[15px]">View Eligible Products</h2>
                        <div className="mb-4">
                            <h1 className="font-bold">EMI option avaible</h1>
                            <ul className="list-disc ml-5">
                                <li>EMI starting from Rs.47/month</li>
                            </ul>
                        </div>
                        <div className="border w-full"/>
                        <div className="mt-5">
                            <h1 className="font-bold">PRODUCT DETAILS</h1>
                            <p className=" max-w-[500px] first-letter:capitalize">{data.description}</p>
                        </div>
                        <div className="my-4">
                            <h1 className="font-bold">Size & Fit</h1>
                            <span>Fit: Slim Fit</span><br/>
                            <span>{"The model (height 6') is wearing a size 40"}</span>
                        </div>
                        <div className="my-4">
                            <h1 className="font-bold">Material & Care</h1>
                            <span>100% Cotton</span><br/>
                            <span>Machine Wash</span>
                        </div>
                        <div className="my-4">
                            <h1 className="font-bold">Specifications</h1>
                            <Link className="text-pink-500 text-[15px] font-bold">See More</Link>
                        </div>
                        <div className="my-4">
                            <h1 className="font-bold">RATINGS</h1>
                            <div className="flex">
                                <div className="flex flex-col">
                                    <span>{data.ratingAverage}</span>
                                    <span>{data.review.length}</span>
                                </div>
                                <div>
                                    progress
                                </div>
                            </div>
                        </div>
                        <div className="w-full border"/>
                        <div className="space-y-4 my-4">
                            <div>
                                <span>Product Code:</span>
                                <span>{data.id}</span>
                            </div>
                            <div className="flex">
                                <span>Seller : </span>&nbsp;
                                {data.sellers.map((ele,idx)=><span className="text-pink-500 font-bold capitalize" key={idx}>{ele.name}</span>)}
                            </div>
                            <div>
                                <span className="font-bold">View Supplier Information</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <div className="w-full border max-h-0"/> 
                        <h1 className="text-pink-500 text-[25px] bg-gray-200 border p-2 min-w-[200px] flex justify-center items-center rounded-full">Reviews</h1>
                        <div className="w-full border max-h-0"/>
                   </div>
                   <div>
                        {data.review.length==0?<div className="text-center my-4">- - No Reviews - -</div>:<div className="flex flex-wrap m-12">{data.review.map((review,idx)=><div className="bg-gray-300 rounded-md p-3 m-3" key={idx}>
                            <h1 className=" capitalize">Consumer: <strong>{review.user.name}</strong></h1>
                            <p>Review: {review.review}</p>
                            <p>Rating: {review.rating}</p>
                            </div>)}
                            </div>}
                   </div>
                </div>
            </div>
            <Footer/>
        </div>
    )};
export default ProductDetails;