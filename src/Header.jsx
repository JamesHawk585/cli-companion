import React, { useRef } from "react";
import SnippetForm from "./SnippetForm/SnippetForm";
import "./App.css"

const Header = () => {

  const dialogRef = useRef(null);

    const onAddButtonClick = () => {
        console.log("I work!")
        dialogRef.current.showModal();
    }

  return (
      <header className="header">
        <h1>💻CLI-Companion</h1>
        <div>
          <label>
            🔎 <input type="search"></input>
            <button onClick={() => onAddButtonClick()}>+Add</button>
          </label>
        </div>
        <SnippetForm dialogRef={dialogRef}/>
      </header>
  );
};

export default Header;
