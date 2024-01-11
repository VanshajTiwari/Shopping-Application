import axios from "axios";
const BASE_URL="http://127.0.0.1:8081"
const signup_api=async (datum)=>{
    
    const {data}=await axios({
    method:'post',
    url:`${BASE_URL}/users/signup`,
    data:datum
})
    return data;
};
async function getUsers(){
        
    const {data}=await axios({
       
        method:'GET',
        url:`${BASE_URL}/users/`,
    })
        sessionStorage("users",data.data);
        return data.data;
};
async function getProducts(){
    const {data}=await axios({
        method:"get",
        url:`${BASE_URL}/products/all`
    });
    return data.data.products;
}
async function getProduct(id){
    const {data}=await axios({
        method:"get",
        url:`${BASE_URL}/products/get/${id}`
    });
    console.log(data);
    return data.data.product;
}
async function getUserWishList(id){
    try{

        const {data}=await axios({
            method:'get',
            url:`${BASE_URL}/users/getwishList/${id}`
        });
        return data.data;
    }catch(err){
        console.log(`ERROR ${err.message}`);
    }
}
async function login_api(datum){const data=await axios({
    withCredentials:true,
    method:'POST',
    url:`${BASE_URL}/users/login`,
    data:datum});
    console.log(data);
    document.cookie=`connect.sid=${data.data.session}`;
    return data.data.data;
};
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


export {login_api,signup_api,getUsers,getProducts,getProduct,getUserWishList};