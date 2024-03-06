import React, { useState, useEffect } from "react";
import SnippetCard from "../SnippetCard/SnippetCard";
import "./SnippetList.css"

const SnippetList = ({ API, snippets, onSnippetDeleted }) => {
  console.log(typeof(onSnippetDeleted))
  const snippetCards = snippets.map((snippetObj, index) => {
    return (
        <SnippetCard
          key={index}
          snippetId={snippetObj.id}
          title={snippetObj.title}
          tags={snippetObj.tags}
          languageSelect={snippetObj.languageSelect}
          code={snippetObj.code}
          onSnippetDeleted={onSnippetDeleted}
        />
    );
  });

  console.log(onSnippetDeleted)

  return <>{snippetCards}</>;
};

export default SnippetList;
