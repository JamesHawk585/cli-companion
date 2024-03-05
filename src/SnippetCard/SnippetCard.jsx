import React from 'react'
import './SnippetCard.css'

const SnippetCard = ({  
    title,
    tags,
    languageSelect,
    code
}) => {

    // Not getting language select 
    // Delete button should prompot the user "Are you sure?"

  return (
    <div className='snippetCard'>
        <h1>{title}</h1>
        <h3>{tags}</h3>
        <h3>{languageSelect}</h3>
        <h3>{code}</h3>
        <button>Edit</button>
        <button>Delete</button>

    </div>
  )
}

export default SnippetCard