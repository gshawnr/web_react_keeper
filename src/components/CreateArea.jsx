import React, { useState } from "react";
import { Zoom, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateArea = (props) => {
  const [inputNote, setNote] = useState({
    title: "",
    content: "",
    zoomEffect: false,
    hidden: true,
    titlePlaceholder: "Take a note ...",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = () => {
    setNote((prev) => {
      return {
        ...prev,
        hidden: false,
        zoomEffect: true,
        titlePlaceholder: "Title",
      };
    });
  };

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          onClick={handleClick}
          onFocus={handleClick}
          name="title"
          value={inputNote.title}
          placeholder={inputNote.titlePlaceholder}
        />
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          value={inputNote.content}
          placeholder="Details"
          rows="3"
          hidden={inputNote.hidden}
        />
        <Zoom in={inputNote.zoomEffect}>
          <Fab
            className="testing"
            onClick={(e) => {
              props.addNote(inputNote);
              setNote({
                title: "",
                content: "",
                hidden: true,
                zoomEffect: false,
                titlePlaceholder: "Take a note ...",
              });
            }}
            type="button"
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
