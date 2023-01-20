import React from "react";

const Filter = (props) => {
    return (
        <div>
        filters with <input
          value={props.filterSearch}
          onChange={props.handleFilter}
        />
      </div>
    )
}

export default Filter