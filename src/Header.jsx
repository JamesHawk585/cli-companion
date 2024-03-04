import React, { useRef } from "react";

const Header = () => {

  const dialogRef = useRef(null)

    const onAddButtonClick = () => {
        console.log("I work!")
        dialogRef.current.showModal();
    }

  return (
      <header>
        <h1>💻CLI-Companion</h1>
        <div>2
          <label>
            🔎 <input type="search"></input>
            <button onClick={() => onAddButtonClick()}>+Add</button>
          </label>
        </div>
        <dialog ref={dialogRef}>
        <form>
          <label>
            Title
            <input name="title" />
          </label>
          <label>
            Tags
          <input className="tags"></input>
          </label>
          <label>
            Language
            <select>
              <option>JavaScript</option>
              <option>Python</option>
              <option>HTML</option>
              <option>CSS</option>
            </select>
          </label>
          <label>
            Code
            <textarea name="code"></textarea>
          </label>
          <label>
            Explanation
            <textarea name="explanation"></textarea>
          </label>
          <button>Save</button>
        </form>
      </dialog>
      </header>
  );
};

export default Header;
