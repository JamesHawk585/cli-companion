import React, { useRef } from 'react'

const EditSnippetForm = ({ editRef }) => {
    const formRef = useRef(null)

const onSubmitEditForm = () => {
    console.log("onSubmitEdit")
}

  return (
    <dialog ref={editRef}>
      <form className="form" onSubmit={(e) => onSubmitEditForm(e)} ref={formRef}>
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
        <button>Close</button>
      </form>
    </dialog>
  )
}

export default EditSnippetForm