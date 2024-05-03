import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Product.module.css";
import Footer from "../Allsimilar/Footer";
import { useState } from "react";

const Product = () => {
    const [imgma, setImgma] = useState("https://n2.sdlcdn.com/imgs/k/h/n/Veirdo-Multi-Cotton-Oversized-Fit-SDL684582951-1-a8c89.jpg");

    const [changco1, setChangco1] = useState(false);
    const [changco2, setChangco2] = useState(false);
    const [changco3, setChangco3] = useState(false);
    const [changco4, setChangco4] = useState(false);
    const [changco5, setChangco5] = useState(false);


    function handleImage(event){
        setImgma(event.target.src);
    }


  return (
    <>
      <Navbar />

      <div className={style.mainprodiv}>
        <div className={style.insidemain}>
          <div className={style.leftdiv1}>
            <div className={style.leftin1}>
                <div>
                    <img onClick={handleImage} src="https://n2.sdlcdn.com/imgs/k/h/n/Veirdo-Multi-Cotton-Oversized-Fit-SDL684582951-1-a8c89.jpg" alt="" />
                </div>
                <div>
                    <img onClick={handleImage} src="https://n2.sdlcdn.com/imgs/k/h/n/Veirdo-Multi-Cotton-Oversized-Fit-SDL684582951-5-5be98.jpg" alt="" />
                </div>
                <div>
                    <img onClick={handleImage}src="https://n4.sdlcdn.com/imgs/k/h/n/Veirdo-Multi-Cotton-Oversized-Fit-SDL684582951-3-096ec.jpg" alt="" />
                </div>
                <div>
                    <img onClick={handleImage} src="https://n3.sdlcdn.com/imgs/k/h/n/Veirdo-Multi-Cotton-Oversized-Fit-SDL684582951-4-d40c2.jpg" alt="" />
                </div>
            </div>
            <div className={style.leftin2}>
              <img
                src={imgma}
                alt=""
              />
            </div>
          </div>

          <div className={style.rightdiv1}>
            <p className={style.prodes1}>Veirdo - Multicolor Cotton Oversized Fit Men's T-Shirt</p>
            <div className={style.rullerco}></div>
            <span className={style.prodes3}>MRP</span>
            <span className={style.prodes2}>Rs. 1,199</span>
            <span className={style.prodes3}>(Inclusive of all taxes)</span>
            <p className={style.prodes4} >Rs. 419</p>


            <div className={style.sizepro}>
                <p >Size : </p>
                <div className={changco1 ? style.initialtwo:  style.initialone} onClick={()=>{setChangco1(true)}}>S</div>
                <div className={changco2 ? style.initialtwo:  style.initialone} onClick={()=>{setChangco2(true)}}>M</div>
                <div className={changco3 ? style.initialtwo:  style.initialone} onClick={()=>{setChangco3(true)}}>L</div>
                <div className={changco4 ? style.initialtwo:  style.initialone} onClick={()=>{setChangco4(true)}}>XL</div>
                <div className={changco5 ? style.initialtwo:  style.initialone} onClick={()=>{setChangco5(true)}}>2XL</div>

            </div>

            <div className={style.buttons}>
                <button>ADD TO CART</button>
                <button>BUY NOW</button>

            </div>

    <div className={style.sizepro2}>
                <p >Delivery:</p>

                <div>
                    <p>Delivery in 6-8 days Free</p>
                    <p>7 Days Easy Returns We assure easy return exchange of purchased items within 7 days of delivery.</p>
                </div>

            </div>

            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
