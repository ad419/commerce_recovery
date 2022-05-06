import React, { useState, useEffect } from "react";
import "../../styles/_navbar.css";
import { FiSearch } from "react-icons/fi";
import AdditionalNavbar from "./AdditionalNavbar";
import { AiOutlineMenu } from "react-icons/ai";
import CartIcon from "../svg/CartIcon";
import Logo from "../svg/Logo";
import Sidebar from "./Sidebar";
import { AiOutlineClose } from "react-icons/ai";
import "../../styles/_search_items.css";

import { commerce } from "../../lib/commerce";

const Navbar = ({ totalItems }) => {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [show, setShow] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [propUpProds, setPopUpProds] = useState([]);

  const fetchSearchItems = async () => {
    const { data } = await commerce.products.list({ query: keyword });

    if (!data) {
      setPopUpProds([]);
    }

    if (!data) {
      setErrMsg("Canot find this product");
    } else {
      setErrMsg("");
    }

    setSearchItems(data);
  };

  const fetchFeaturedProds = async () => {
    const limit = 4;

    const { data } = await commerce.products.list({ limit: limit });

    if (!keyword) {
      setPopUpProds(data);
    } else setPopUpProds([]);
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    fetchFeaturedProds();
  }, []);

  console.log(propUpProds);

  return (
    <>
      <div className={`${open ? "block1" : "hiden1"}`}>
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <div className="sticky">
        <div className="navbar">
          <div style={{ cursor: "pointer" }} className="menu_icon">
            {open ? (
              <div
                className="icon_btn"
                style={{ zIndex: 20 }}
                onClick={() => setOpen(false)}
              >
                <AiOutlineClose size={25} color="white" />
              </div>
            ) : (
              <div className="icon_btn" onClick={() => setOpen(true)}>
                <AiOutlineMenu size={25} color="white" />
              </div>
            )}
          </div>
          <div
            onClick={() => (window.location.href = "/")}
            style={{ cursor: "pointer", zIndex: 10 }}
            className="logo_icon"
          >
            <Logo />
          </div>
          <div className="search_group">
            <input
              onClick={() => setShow(true)}
              onChange={handleInputChange}
              placeholder="Search any product"
              type="text"
            />
            <div onClick={fetchSearchItems} className="search_icon">
              <FiSearch size={19} style={{ marginTop: "0.31rem" }} />
            </div>

            <div
              onClick={() => (window.location.href = "/cart")}
              className="cart_icon"
            >
              <h1
                style={{
                  position: "absolute",
                  color: "orange",
                  marginLeft: 19,
                  marginTop: 0.1,
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {totalItems}
              </h1>
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
      <AdditionalNavbar />
      <div className="dc_flex">
        <div className={`${show ? "search_content" : "hiden"} search_content`}>
          <div onClick={() => setShow(false)} className="search-close">
            <AiOutlineClose size={19} />
          </div>

          <div>
            {searchItems?.map((item) => (
              <div className="search_item_res" key={item.id}>
                <a href={`/product-details/${item.id}`}>
                  <h1>{item.name}</h1>
                </a>
              </div>
            ))}
            {errMsg && <h1>{errMsg}</h1>}
            {propUpProds && (
              <div>
                {propUpProds?.map((item) => (
                  <div className="search_item_res" key={item.id}>
                    <a href={`/product-details/${item.id}`}>
                      <h1>{item.name}</h1>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
