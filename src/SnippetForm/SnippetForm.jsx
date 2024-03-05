import React, { useRef, useEffect } from "react";
import "./SnippetForm.css";
import "/home/jph94880/development/code/projects/cli-companion/src/App.css";

const API = "http://127.0.0.1:5555/snippets";

const SnippetForm = ({ dialogRef, onSnippetFormSubmitted }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    fetch(
      API,
      {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(formData)
      })
        .then(r => r.json())
        .then(responseSnippetObject => onSnippetFormSubmitted(responseSnippetObject))
        formRef.current.reset()
};

//   The response body of a post request is the newly added object as it appears in the db, with id. 

  return (
    <dialog ref={dialogRef}>
      <form className="form">
        <label className="title-label">
          Title
          <input name="title" />
        </label>
        <label className="tag-label">
          Tags
          <input className="tags" name="tags" />
        </label>
        <label>
          Language
          <select name="languageSelect">
            <option>JavaScript</option>
            <option>Python</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>Terminal Commands</option>
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
