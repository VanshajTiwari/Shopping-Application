import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/login';
import Singup from './pages/Signup';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
function App() {
  const queryClient=new QueryClient({
    defaultOptions:{
      queries:{
        staleTime:100000
      }
    }
  });
console.log(queryClient);
  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Singup/>}/>
          </Routes>
      </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false}>
    </ReactQueryDevtools>
      </QueryClientProvider>
  );

}

export default App
