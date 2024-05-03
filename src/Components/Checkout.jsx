import React from "react";
import style from "../Css/Checkout.module.css";
import Navbar from "../Allsimilar/Navbar";

const Checkout = () => {


    const purItems = [
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

      <div className={style.checkoutmain}>
        <div className={style.indiv2}>
          <div>
            <p className={style.chep1}>Review Order</p>


            {purItems && purItems.map((ele,index)=>{
                return  <div className={style.checpro1} key={index}>
                <img
                  src={ele.img}
                  alt=""
                />
  
                <div>
                  <p className={style.chedes}>
                   {ele.title}
                  </p>
                  <p className={style.chedes2}>Color: Multicolor Size: 2XL</p>
                </div>
  
                <p className={style.chedes3}>Qty : 1</p>
                <p className={style.chedes4}>Total: Rs. {ele.price}</p>
              </div>
            })}
            <button className={style.checpay}>PAY RS. 1020</button>
          </div>

          <div>
          <p className={style.chep2}>Customer Details</p>

            <div className={style.detailpay}>
                <label>Name : </label>
                <input className={style.payin1}  type="text" placeholder="enter name"/>
            </div>

            <div className={style.detailpay}>
                <label>Email : </label>
                <input className={style.payin2} type="email" placeholder="enter email"/>
            </div>

            <div className={style.detailpay}>
                <label>Address : </label>
                <input className={style.payin3} type="text" placeholder="enter address"/>
            </div>

            <div className={style.detailpay}>
                <label>Phone : </label>
                <input className={style.payin4}  type="number" placeholder="enter phone"/>
            </div>

            <div className={style.detailpay}>
                <label>Pincode : </label>
                <input className={style.payin5} type="number" placeholder="enter pincode"/>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
