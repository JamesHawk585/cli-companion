import React from 'react'
import './SnippetCard.css'

const SnippetCard = ({  
    title,
    tags,
    languageSelect,
    code,
    onSnippetDeleted,
    snippetId
}) => {

  console.log(onSnippetDeleted)

  const handleEditSnippet = (e) => {
    e.preventDefault();
    console.log(e);
  }

  const handleDeleteSnippet = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(typeof(onSnippetDeleted))
    onSnippetDeleted(snippetId);
  }

    // Not getting language select 
    // Delete button should prompot the user "Are you sure?"

  return (
    <div className='snippetCard'>
        <h1>{title}</h1>
        <h3>{tags}</h3>
        <h3>{languageSelect}</h3>
        <h3>{code}</h3>
        <button onClick={(e) => handleEditSnippet(e)}>Edit</button>
        <button onClick={(e) => handleDeleteSnippet(e)}>Delete</button>

    </div>
  )
}

export default SnippetCard