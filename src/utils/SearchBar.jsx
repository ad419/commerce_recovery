import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import { FiSearch } from "react-icons/fi";
import "../styles/_search_items.css";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const fetchSearchItems = async () => {
    const { data } = await commerce.products.list({ query: keyword });

    setSearchItems(data);
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  return <></>;
};

export default SearchBar;
