import image0 from "./../../assets/Home/category image/img-00.png";
import image1 from "./../../assets/Home/category image/img-01.png";
import image2 from "./../../assets/Home/category image/img-02.png";
import image3 from "./../../assets/Home/category image/img-03.png";
import image4 from "./../../assets/Home/category image/img-04.png";
import image5 from "./../../assets/Home/category image/img-05.png";
import image6 from "./../../assets/Home/category image/img-06.png";
import image7 from "./../../assets/Home/category image/img-07.png";
import image8 from "./../../assets/Home/category image/img-08.png";
import image9 from "./../../assets/Home/category image/img-09.png";
import image10 from "./../../assets/Home/category image/img-010.png";
import image11 from "./../../assets/Home/category image/img-011.png";
import image12 from "./../../assets/Home/category image/img-012.png";
import image13 from "./../../assets/Home/category image/img-013.png";
import image14 from "./../../assets/Home/category image/img-014.png";
import image15 from "./../../assets/Home/category image/img-015.png";
import image16 from "./../../assets/Home/category image/img-016.png";
import image17 from "./../../assets/Home/category image/img-017.png";
import image18 from "./../../assets/Home/category image/img-018.png";
import image19 from "./../../assets/Home/category image/img-019.png";
import image20 from "./../../assets/Home/category image/img-020.png";
import image21 from "./../../assets/Home/category image/img-021.png";
import image22 from "./../../assets/Home/category image/img-022.png";
import image23 from "./../../assets/Home/category image/img-023.png";
import image24 from "./../../assets/Home/category image/img-024.png";
import upfooter from "../../assets/Home/category image/up--footer.png";
const ShopByCate = () => {
  const images=[image0,image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image10,image12,image16];
  
  return (
    <div className="flex flex-wrap justify-center">
    {images.map(__img=>{
      return(
      <div className="m-1" key={__img}>
          <div className="max-w-[238px] min-h-[267px] bg-pink-400 overflow-hidden">
              <img  src={__img} alt="photo" />
          </div>
          <div className="my-4">
              <h1 className="font-semibold text-[18px]">Cruelty-Free Peron</h1>
              <span className=" font-extrabold text-[20px]">BUY 1,GET 1 FREE</span>
          </div>
        </div>
  )})} 
    <div className="my-7 hover:cursor-pointer">
        <a href="#">
          <img src={upfooter} alt="footer image"/>
        </a>
    </div>
    </div>
  )
}

export default ShopByCate;