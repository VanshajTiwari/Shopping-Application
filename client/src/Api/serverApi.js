import axios from "axios";


const BASE_URL="http://127.0.0.1:8081"
const signup_api=async (data)=>await axios({
    method:'post',
    url:`${BASE_URL}/users/signup`,
    data:data
});
const login_api=async (data)=>await axios({
    method:'POST',
    url:`${BASE_URL}/users/login`,
    data:{username:data.username,password:data.password}
});
const forgotPassword_api=async(data)=>axios({
    method:'post',
    url:`${BASE_URL}/`,
    data:data
});
const resetPassword_api=async(data)=>axios({
    method:"post",
    url:`${BASE_URL}/users/resetPassword`,
    data:data
});

const addproducts_api=async(data)=>axios({
    method:"Post",
    url:`${BASE_URL}/`,
    data:data
});

const removeProducts_api=async(data)=>axios({});

const addToWishlist_api=async(data)=>axios({});
const removeFromWishlist_api=async(data)=>axios({});

const addToCart_api=async(data)=>axios({});
const removeFromCart_api=async(data)=>axios({});

const placeOrder=async(data)=>axios({});


const uploadProduct=async(data)=>axios({});


export {login_api,signup_api};