import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Cart.module.css";
import { RxCross2 } from "react-icons/rx";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Footer from "../Allsimilar/Footer"

const Cart = () => {
  const itemsshop = [
    {
      img: "https://n2.sdlcdn.com/imgs/k/h/n/Veirdo-Multi-Cotton-Oversized-Fit-SDL684582951-1-a8c89.jpg",
      title: "Veirdo - Multicolor Cotton Oversized Fit Men's T-Shirt",
      price: 419,
    },
    {
        img: "https://n4.sdlcdn.com/imgs/k/j/g/230X258_sharpened/Uzarus-Black-Cotton-Blend-Regular-SDL834644830-1-363d9.webp",
        title: "Uzarus - Black Cotton Blend Regular Fit  Men's T-Shirt",
        price: 490,
      },
      {
        img: "https://n3.sdlcdn.com/imgs/k/f/2/230X258_sharpened/Paul-Street-Teal-Blue-100-SDL474552243-1-2de05.webp",
        title: "Paul Street - Teal Blue Cotton Slim Fit Men's T-Shirt",
        price: 367,
      },
  ];

  return (
    <>
      <Navbar />

      <div className={style.maincartdiv}>
        <div className={style.showlistpro}>


            {itemsshop && itemsshop.map((ele,index)=>{
                return  <div className={style.prois} key={index}>
                <img
                  className={style.proisimg}
                  src={ele.img}
                  alt=""
                />
    
                <div className={style.details}>
                  <p>{ele.title}</p>
                  <p className={style.typesinpro}>Color: Multicolor | Size: 2XL</p>
    
                  <div className={style.remove}>
                    <RxCross2 />
                    <span className={style.removep}>Remove</span>
                  </div>
                </div>
    
                <div className={style.price}>
                  <p>Rs. {ele.price}</p>
                </div>
    
                <div className={style.price2}>
                  <p>Quantity : 1</p>
    
                  <div className={style.both}>
                    <div>
                      <CiCirclePlus />
                    </div>
    
                    <div>
                      <CiCircleMinus />
                    </div>
                  </div>
                </div>
    
    
                <div className={style.price4}>
                  <p>Subtotal : Rs. {ele.price}</p>
                </div>
    
              </div>
            })}

          <div className={style.paybutton}>
            <button>PROCEED TO PAY RS. 1020 </button>
        </div>

        </div>

        
      </div>


      <Footer/>
    </>
  );
};

export default Cart;
