import axios from "axios";

axios.defaults.withCredentials=true;
const BASE_URL="http://127.0.0.1:8080"
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
    method:'POST',
    url:`${BASE_URL}/users/login`,
    data:datum});
    console.log(data);
    return data.data.data;
};
const forgotPassword_api=async(data)=>axios({
    method:'post',
    url:`${BASE_URL}/resetPassword`,
    data:data,
    
});
const updatePassword_api=async(id,data)=>axios({
    method:"post",
    url:`${BASE_URL}/users/updatepassword/${id}`,
    data:data,
    
});

const addproducts_api=async(id,data)=>await axios({
    method:"Post",
    url:`${BASE_URL}/${id}`,
    data:data,
    
});

const removeProducts_api=async(data)=>await axios({});


///////////////////  wishlist__api
const addToWishlist_api=async(id)=>{
    const response=axios({
    method:"POST",
    url:`${BASE_URL}/addtowishlist/${id}`,
    
    });
    console.log(id)
    return response;
};
const getWishlist=async()=>{
    const response=await axios({
        method:"GET",
        url:`${BASE_URL}/wishlist/`,
        
    })
    return response.data;
};

const removeFromWishlist_api=async(id)=>{
    const res=await axios({
    method:"DELETE",
    url:`${BASE_URL}/wishlist/remove/${id}`,
    
})
    return res;
};
////////////////

///////////////     CART__api
const addToCart_api=async(id)=>{
    const response=axios({
    method:"POST",
    url:`${BASE_URL}/addtocart/${id}`,
    
    });
    return response;
};
const getcart=async()=>{
    const response=await axios({
        method:"GET",
        url:`${BASE_URL}/cartlist`,
        
    })
    return response.data;
}
const removeFromCart_api=async(data)=>{
    const res=axios({
        method:"DELETE",
        url:`${BASE_URL}/cart/remove/${id}`,
        
    })
    return res;
};

////////////////////
// const placeOrder=async(data)=>axios({});


// const uploadProduct=async(data)=>axios({});


export {login_api,signup_api,getUsers,getProducts,getProduct,getUserWishList,addToWishlist_api,addToCart_api};