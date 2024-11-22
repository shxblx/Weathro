import React, { useContext } from "react";
import { SearchContext } from "../Context";
import { SearchBox } from "@mapbox/search-js-react";

const Searchbar = () => {
  const { searchText, setSearchText } = useContext(SearchContext);
  const token = import.meta.env.VITE_MAP_BOX;
  console.log(searchText);
  return (
    <div className="flex justify-center mt-10">
      <SearchBox
        accessToken={token}
        value={searchText}
        placeholder="Search your location..."
        options={{
          language: "en",
          types: "place,locality,neighborhood,address",
        }}
        onChange={(e) => setSearchText(e.target.value)}
        onRetrieve={(res) => {
          setSearchText(res.features[0].properties.name);
          console.log(res.features[0]);
        }}
      />
    </div>
  );
};

export default Searchbar;
