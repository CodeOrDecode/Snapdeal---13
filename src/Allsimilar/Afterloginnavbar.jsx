import React from "react";
import style from "../Css/Afterloginnavbar.module.css";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaFirstOrder } from "react-icons/fa6";
import { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { IoGiftOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Afterloginnavbar = () => {
  const navigate = useNavigate();

  const [flyit, setFlyit] = useState(false);
  const [who, setWho] = useState("Ritesh");

  function handleWho() {
    let getname = JSON.parse(localStorage.getItem("name"));
    setWho(getname);
  }

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    handleWho();
  }, []);

  return (
    <div className={style.navpri}>
      <div className={style.nav1}>
        <div className={style.navp1}>
          Brand Waali Quality, Bazaar Waali Deal!
        </div>
        <div className={style.nav2}>
          <div>Impact@Snapdeal</div>
          <div>Help Center</div>
          <div>Sell On Snapdeal</div>
          <div className={style.nav3}>
            <img
              className={style.navimg}
              src="https://i4.sdlcdn.com/img/platinum09/downloadappicon2ndsep.png"
              alt=""
            />
            <div>Download App</div>
          </div>
          <div>Donate for elderly</div>
        </div>
      </div>

      <div className={style.navpart2}>
        <div className={style.divlogo}>
          <img
            src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
            alt=""
          />
        </div>
        <div className={style.inputone}>
          <input type="text" placeholder="Search products &amp; brands" />
          <button className={style.navbutton}>
            <IoSearch className={style.search1} />
            Search
          </button>
        </div>
        <div className={style.cart}>
          <div className={style.cartp}>Cart</div>
          <IoCartOutline className={style.carticon} />
        </div>

        <div
          className={flyit ? style.signin2 : style.signin}
          onMouseOver={() => {
            setFlyit(true);
          }}
          onMouseLeave={() => {
            setFlyit(false);
          }}
        >
          <div className={style.signinp}>{who}</div>
          <div className={style.account}>
            <BiSolidUser className={style.accountsmall} />
          </div>
        </div>
      </div>

      {flyit && (
        <div
          className={style.blackfly}
          onMouseOver={() => {
            setFlyit(true);
          }}
          onMouseLeave={() => {
            setFlyit(false);
          }}
        >
          <div className={style.partfly}>
            <div>
              <FaFirstOrder className={style.iconfly} />
              <p className={style.flyp2}>Your Orders</p>
            </div>
            <div>
              <MdOutlineFavoriteBorder className={style.iconfly} />
              <p className={style.flyp2}>Shortlist</p>
            </div>

            <div>
              <IoGiftOutline className={style.iconfly} />
              <p className={style.flyp2}>E-Gift Voucher</p>
            </div>
          </div>

          <div className={style.rullerhome}></div>

          <button className={style.logouthome} onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Afterloginnavbar;
