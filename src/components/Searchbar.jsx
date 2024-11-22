import React, { useContext } from "react";
import { SearchContext } from "../Context";
import { SearchBox } from "@mapbox/search-js-react";

const Searchbar = () => {
  const { searchText, setSearchText } = useContext(SearchContext);
  const token = import.meta.env.VITE_MAP_BOX;
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
        onRetrieve={(res) => {
          setSearchText(res.features[0].properties.name);
        }}
      />
    </div>
  );
};

export default Searchbar;
