import React, { useContext, useRef, useEffect, Fragment } from "react";
import SpotContext from "../../context/spot/SpotContext";
import SpotTags from "./SpotTags";

const SpotFiltered = () => {
  const spotContext = useContext(SpotContext);
  const { filtered, filterSpots, clearFilter } = spotContext;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterSpots(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Fragment>
      <form
        data-test="filter-container"
        style={{ width: "400px" }}
        className="text-center"
      >
        <input
          ref={text}
          type="text"
          placeholder="Filter spots..."
          onChange={onChange}
          style={{ width: "400px" }}
        />
      </form>
      <SpotTags />
    </Fragment>
  );
};

export default SpotFiltered;
