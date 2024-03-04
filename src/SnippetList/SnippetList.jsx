import React, { useState, useEffect } from 'react'

const SnippetList = ({ API }) => {
    const [snippets, setSnippets] = useState([])

    useEffect(() => {
        fetch(API)
    })

  return (
    <div>SnippetList</div>
  )
}

export default SnippetList