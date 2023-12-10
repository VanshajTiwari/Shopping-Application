import { useEffect } from "react"

const Hero = () => {
    useEffect(()=>{
        const slideNumber=document.querySelectorAll(".hero--slides");
        const heroCollection=document.querySelector(".slider");

        slideNumber.forEach(ele=>{

            ele.addEventListener('click',(e)=>{
                const t=e.target.getAttribute("data-item");
                console.log(t);
                heroCollection.style=`transform:translateX(-${t*100}%)`
            });
        })
    },[]);
  return (
    <div className="mt-[90px]">    
        <div className="min-w-[100%] min-h-[70vh] bg-red-500 overflow-hidden flex hero--collection">
            <div className="slider flex transition-all duration-1000">
                {/*<img src="" alt="photo"/>*/}
                <div className="min-w-[100vw] min-h-[70vh] bg-green-500"></div>
                <div className="min-w-[100%] min-h-[100%] bg-blue-500"></div>
                <div className="min-w-[100%] min-h-[100%] bg-pink-500"></div>
                <div className="min-w-[100%] min-h-[100%] bg-purple-500"></div>
                <div className="min-w-[100%] min-h-[100%] bg-orange-500"></div>
            </div>
        </div>
        <div className="relative flex justify-center gap-x-1 my-2">
            <div className="p-1 rounded-full bg-gray-500 max-w-[5px] hero--slides" data-item="0"></div>
            <div className="p-1 rounded-full bg-gray-500 max-w-[5px] hero--slides " data-item="1"></div>
            <div className="p-1 rounded-full bg-gray-500 max-w-[5px]  hero--slides" data-item="2"></div>
            <div className="p-1 rounded-full bg-gray-500  max-w-[5px] hero--slides" data-item="3" ></div>
            <div className="p-1 rounded-full bg-gray-500  max-w-[5px] hero--slides" data-item="4"></div>
        </div>
    </div>

  )
}

export default Hero
