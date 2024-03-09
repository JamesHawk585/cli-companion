import React, { useRef } from 'react'

function EditSnippetForm({ editRef, onSnippetFormEdited, snippetId }) {
    const formRef = useRef(null)

    console.log(snippetId)
    const API = 'http://127.0.0.1:5555/snippets'

const onSubmitEditForm = (e) => {
  console.log(snippetId)
  e.preventDefault()
  const formData = Object.fromEntries(new FormData(e.target));
  fetch(`${API}/${snippetId}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(responseSnippetObject => onSnippetFormEdited(responseSnippetObject))
    formRef.current.reset()
};

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