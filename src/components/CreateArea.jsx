import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  function handleOnClick() {
    setExpanded(true);
    console.log(isExpanded);
  }
  return (
    <div className="area">
      <form className="create-note">
        {isExpanded ? (
          <input onChange={props.onChange} name="title" placeholder="Title" />
        ) : null}
        <textarea
          onClick={handleOnClick}
          onChange={props.onChange}
          name="content"
          placeholder="Take a note"
          rows={isExpanded === true ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab className="btn" type="button" onClick={props.onClick}>
            <AddCircleOutlineIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
