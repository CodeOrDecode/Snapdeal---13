import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Men.module.css";
import { FaAngleDown } from "react-icons/fa";
import Footer from "../Allsimilar/Footer";

const Men = () => {
  const proData = [
    {
      img: "https://n3.sdlcdn.com/imgs/k/n/v/230X258_sharpened/UNIBERRY-Red-Cotton-Blend-Regular-SDL209223363-1-0607a.jpeg",
      title: "UNIBERRY - Red Cotton Blend Regular Fit Men's Polo T Shirt",
      price: "346",
    },
    {
      img: "https://n1.sdlcdn.com/imgs/k/l/t/230X258_sharpened/UrbanMark-Light-Blue-Cotton-Regular-SDL135544131-1-e73df.webp",
      title: "UrbanMark Sleeves Regular T Shirt-Light Blue",
      price: "302",
    },

    {
      img: "https://n2.sdlcdn.com/imgs/k/p/q/230X258_sharpened/UrbanMark-Beige-Cotton-Blend-Regular-SDL359235872-1-f523c.webp",
      title: "UrbanMark Mens Regular Fit  T Shirt ",
      price: "332",
    },
    {
      img: "https://n1.sdlcdn.com/imgs/k/h/n/230X258_sharpened/Veirdo-Multi-Cotton-Oversized-Fit-SDL684582951-1-a8c89.webp",
      title: "Veirdo - Multicolor Cotton Oversized Fit Men's T-Shirt",
      price: "419",
    },

    // 5
    {
      img: "https://n2.sdlcdn.com/imgs/k/h/p/230X258_sharpened/BULLMER-Sea-Green-Cotton-Blend-SDL726784140-1-24ffc.webp",
      title: "VBULLMER - Olive Cotton Blend Regular Fit Men's T-Shirt",
      price: "412",
    },
    {
      img: "https://n4.sdlcdn.com/imgs/k/j/a/230X258_sharpened/Leotude-Black-Cotton-Blend-Regular-SDL867560893-3-77142.webp",
      title: "Leotude - Black Cotton Blend Regular Fit Men's Polo T Shirt",
      price: "370",
    },
    {
      img: "https://n2.sdlcdn.com/imgs/k/l/t/230X258_sharpened/UrbanMark-White-Cotton-Regular-Fit-SDL002818004-1-3c1d7.webp",
      title: "The Million Club - Men's Polo T Shirt",
      price: "290",
    },
    {
      img: "https://n4.sdlcdn.com/imgs/k/i/k/230X258_sharpened/Gritstones-Black-Cotton-Blend-Regular-SDL986494638-1-7e5b2.webp",
      title: "Gritstones - Black Cotton Blend Regular Fit Men's Polo T Shirt",
      price: "271",
    },

    // 9
    {
      img: "https://n2.sdlcdn.com/imgs/k/p/r/230X258_sharpened/XFOX-Olive-Cotton-Blend-Regular-SDL700532303-1-4367d.webp",
      title: "XFOX - Olive Cotton Blend Regular Fit Men's Polo T Shirt",
      price: "290",
    },
    {
      img: "https://n4.sdlcdn.com/imgs/k/j/9/230X258_sharpened/Uzarus-Grey-Cotton-Blend-Solids-SDL847552904-1-6a354.png",
      title: "Uzarus Grey Cotton Blend Solids T-Shirt Single Pack",
      price: "565",
    },
    {
      img: "https://n1.sdlcdn.com/imgs/k/s/e/230X258_sharpened/ZEBULUN-Cotton-Blend-Regular-Fit-SDL591357497-1-950d6.webp",
      title: "ZEBULUN Cotton Blend  Men's T-Shirt",
      price: "306",
    },
    {
      img: "https://n1.sdlcdn.com/imgs/k/n/v/230X258_sharpened/UNIBERRY-Black-Cotton-Blend-Regular-SDL324195916-1-0d74b.webp",
      title: "UNIBERRY - Black Cotton Blend Regular Fit Men's Polo T Shirt",
      price: "354",
    },

    // 12

    {
      img: "https://n4.sdlcdn.com/imgs/k/n/v/230X258_sharpened/UNIBERRY-Maroon-Cotton-Blend-Regular-SDL335156237-1-ac275.webp",
      title: "Glito - Cotton Blend Regular Fit Brown Men's T-Shirt",
      price: "365",
    },
    {
      img: "https://n3.sdlcdn.com/imgs/k/n/i/230X258_sharpened/MXN-White-Cotton-Regular-Fit-SDL982837926-1-a28cc.webp",
      title: "UrbanMark Men  Solid Polo T Shirt-Peach",
      price: "302",
    },
    {
      img: "https://n4.sdlcdn.com/imgs/k/e/u/230X258_sharpened/AUSK-Cotton-Blend-Regular-Fit-SDL390896520-1-d67ad.webp",
      title: "AUSK - Yellow Cotton Blend Regular Fit  Men's T-Shirt",
      price: "250",
    },
    {
      img: "https://n2.sdlcdn.com/imgs/k/d/9/230X258_sharpened/Glito-Cotton-Blend-Grey-Solids-SDL506563814-1-92142.webp",
      title: "UNIBERRY - Men's Polo T-Shirt",
      price: "346",
    },
  ];

  return (
    <>
      <Navbar />

      <div className={style.mendivmain}>
        <div className={style.insidemen}>
          <div className={style.inside1}>
            <div className={style.prsidepa1}>
              <p className={style.sideclo}>Men's Clothing</p>
              <p className={style.sideclo2}>Men's T-Shirts &amp; Polos</p>
              <p className={style.sideclo2}>Polo T Shirt For Men</p>
              <p className={style.sideclo2}>T Shirt For Men</p>
              <p className={style.sideclo2}>Couple Combos</p>
            </div>

            <div className={style.ruller}></div>

            <div className={style.brand}>
              <p className={style.sideclo}>Brand</p>
              <p className={style.sideclo2}>3PIN</p>
              <p className={style.sideclo2}>98 Degree North</p>
              <p className={style.sideclo2}>A For F</p>
              <p className={style.sideclo2}>A-MAN</p>
              <p className={style.sideclo2}>ADORATE</p>
            </div>

            <div className={style.ruller}></div>

            <div className={style.color}>
              <p className={style.sideclo}>Color</p>

              <div className={style.colordiv}>
                <div className={style.colorfill1}></div>
                <p>Beige</p>
              </div>
              <div className={style.colordiv}>
                <div className={style.colorfill2}></div>
                <p>Black</p>
              </div>

              <div className={style.colordiv}>
                <div className={style.colorfill3}></div>
                <p>Blue</p>
              </div>

              <div className={style.colordiv}>
                <div className={style.colorfill4}></div>
                <p>Bronze</p>
              </div>

              <div className={style.colordiv}>
                <div className={style.colorfill5}></div>
                <p>Brown</p>
              </div>
            </div>
            <div className={style.ruller}></div>

            <div className={style.fit}></div>

            <div className={style.fit}>
              <p className={style.sideclo}>Fit</p>
              <p className={style.sideclo2}>Oversized Fit</p>
              <p className={style.sideclo2}>Regular Fit</p>
              <p className={style.sideclo2}>Relaxed Fit</p>
              <p className={style.sideclo2}>Slim Fit</p>
            </div>

            <div className={style.ruller}></div>
            <div className={style.fit}>
              <p className={style.sideclo}>Fabric</p>
              <p className={style.sideclo2}>100 Percent Cotton</p>
              <p className={style.sideclo2}>Cotton</p>
              <p className={style.sideclo2}>Cotton Blend</p>
              <p className={style.sideclo2}>Cotton Nylon</p>
              <p className={style.sideclo2}>Lycra</p>
            </div>

            <div className={style.ruller}></div>
            <div className={style.fit}>
              <p className={style.sideclo}>Sleeves Length</p>
              <p className={style.sideclo2}>3/4th Sleeves</p>
              <p className={style.sideclo2}>Full Sleeves</p>
              <p className={style.sideclo2}>Half Sleeves</p>
              <p className={style.sideclo2}>Cotton Nylon</p>
              <p className={style.sideclo2}>Sleeveless</p>
            </div>
            <div className={style.ruller}></div>

            <div className={style.fit}>
              <p className={style.sideclo}>Pattern</p>
              <p className={style.sideclo2}>Applique</p>
              <p className={style.sideclo2}>Checks</p>
              <p className={style.sideclo2}>Colorblock</p>
              <p className={style.sideclo2}>Cut Outs</p>
              <p className={style.sideclo2}>Dyed</p>
              <p className={style.sideclo2}>Embellished</p>
              <p className={style.sideclo2}>Printed</p>
              <p className={style.sideclo2}>Striped</p>
            </div>

            <div className={style.ruller}></div>
            <div className={style.fit}>
              <p className={style.sideclo}>Discount %</p>
              <p className={style.sideclo2}>0 - 10</p>
              <p className={style.sideclo2}>10 - 20</p>
              <p className={style.sideclo2}>20 - 30</p>
              <p className={style.sideclo2}>30 - 40</p>
              <p className={style.sideclo2}>40 - 50</p>
            </div>


          </div>

          <div className={style.inside2}>
            <div className={style.inpart1}>
              <p className={style.inp1}>Men's T-Shirts & Polos</p>
              <div className={style.inp2}>
                Sort by : Popularity <FaAngleDown className={style.indown} />
              </div>
            </div>

            <div className={style.parti}></div>

            <div className={style.prolist}>
              {proData &&
                proData.map((ele, index) => {
                  return (
                    <div key={index}>
                      <img src={ele.img} alt="" />
                      <p className={style.protit}>{ele.title}</p>
                      <span className={style.proprice2}>Rs. {ele.price}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Men;
