import React, { useState, useEffect } from 'react'
import SnippetCard from '../SnippetCard/SnippetCard'

const SnippetList = ({ API }) => {
    const [snippets, setSnippets] = useState([])

    useEffect(() => {
        fetch(API)
        .then((r) => r.json())
        .then((data) => setSnippets(data))
    }, [])

    const snippetCards = snippets.map((card, index) => {
        return <SnippetCard 
        key={index}
        title={card.title}
        tags={card.tags}
        languageSelect={card.languageSelect}
        code={card.code}
        />
    });

    // console.log(snippetCards[0].props)


    // console.log(snippetCard)

  return (
    <>
    {snippetCards}
    </>
  )
}

export default SnippetList