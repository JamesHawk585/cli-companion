import React from 'react'
import './SnippetCard.css'

const SnippetCard = ({  
    title,
    tags,
    languageSelect,
    code,
    onSnippetDeleted,
    snippetId, 
    explanation
}) => {


  const handleEditSnippet = (e) => {
    e.preventDefault();
  }

  console.log(title)
  const handleDeleteSnippet = (e, title) => {
    console.log(title)
    e.preventDefault();
    onSnippetDeleted(snippetId, title);
  }

    // Not getting language select 
    // Delete button should prompot the user "Are you sure?"

  return (
    <div className='snippetCard'>
        <h1>{title}</h1>
        <h3>{tags}</h3>
        <h3>{languageSelect}</h3>
        <h3>{code}</h3>
        <h3>{explanation}</h3>
        <button onClick={(e) => handleEditSnippet(e)}>Edit</button>
        <button onClick={(e) => handleDeleteSnippet(e, title)}>Delete</button>

    </div>
  )
}

export default SnippetCard