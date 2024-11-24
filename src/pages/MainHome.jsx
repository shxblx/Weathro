import React, { createContext, useState } from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Searchbar from "../components/Searchbar";
import { SearchContext } from "../Context";
import Footer from "../components/Footer";

const MainHome = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <SearchContext.Provider value={{ searchText, setSearchText }}>
        <Navbar />
        <Searchbar />
        <Content />
        <Footer />
      </SearchContext.Provider>
    </>
  );
};

export default MainHome;
