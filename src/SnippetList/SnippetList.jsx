import React, { useState, useEffect } from "react";
import SnippetCard from "../SnippetCard/SnippetCard";

const SnippetList = ({ API, snippets }) => {
  const snippetCards = snippets.map((snippetObj, index) => {
    return (
      <div className="snippetCardContainer">
        <SnippetCard
          key={index}
          title={snippetObj.title}
          tags={snippetObj.tags}
          languageSelect={snippetObj.languageSelect}
          code={snippetObj.code}
        />
      </div>
    );
  });

  return <>{snippetCards}</>;
};

export default SnippetList;
