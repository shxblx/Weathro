import React, { createContext, useState } from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import SecondSec from "../components/SecondSec";
import Searchbar from "../components/Searchbar";
import { SearchContext } from "../Context";

const MainHome = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <SearchContext.Provider value={{ searchText, setSearchText }}>
        <Navbar />
        <Searchbar />
        <Content />
        <SecondSec />
      </SearchContext.Provider>
    </>
  );
};

export default MainHome;
