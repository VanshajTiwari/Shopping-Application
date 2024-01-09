import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/login';
import Singup from './pages/Signup';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {useState } from 'react';
import UserContext from './ContextAPI';
import Profile from './pages/profile';
import ProductDetails from './pages/productDetails';
function App() {
  ;
  const [user,setUser]=useState(JSON.parse(sessionStorage.getItem("user")));
  const queryClient=new QueryClient({
    defaultOptions:{
      queries:{
        staleTime:100000
      }
    }
  });
  return(
    <UserContext.Provider value={{user,setUser}} >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Singup/>}/>
              <Route path="/products/:id" element={<ProductDetails/>}/>
            </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false}>
        </ReactQueryDevtools>
        </QueryClientProvider>
    </UserContext.Provider>
  );

}

export default App
