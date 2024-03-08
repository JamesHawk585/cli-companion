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

  const handleDeleteSnippet = (e, title) => {
    e.preventDefault();
    onSnippetDeleted(snippetId, title);
  }


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