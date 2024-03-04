import React from 'react'

const SnippetCard = ({  
    key,
    title,
    tags,
    languageSelect,
    code
}) => {

    // Not getting language select 

  return (
    <>
        <h2>{title}</h2>
        <h3>{tags}</h3>
        <h3>{languageSelect}</h3>
        <h3>{code}</h3>
    </>
  )
}

export default SnippetCard