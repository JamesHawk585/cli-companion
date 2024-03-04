import React, { dialogRef } from "react";
import "./SnippetForm.css";
import "/home/jph94880/development/code/projects/cli-companion/src/App.css";

const SnippetForm = ({ dialogRef }) => {
  return (
    <dialog ref={dialogRef}>
      <form className="form">
        <label className="title-label">
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
  );
};

export default SnippetForm;
