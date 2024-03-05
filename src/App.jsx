import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.jsx";
import SnippetList from "./SnippetList/SnippetList.jsx";
import React, { useState, useEffect } from 'react'

const API = 'http://127.0.0.1:5555/snippets'

export default () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
      fetch(API)
      .then((r) => r.json())
      .then((data) => setSnippets(data))
  }, []) 

  const onSnippetAdded = (snippetObj) => {
    return setSnippets([...snippets, snippetObj])
  }

  return (
    <>
    <div className="app">
      <Header onSnippetAdded={onSnippetAdded}/>
      <section className="snippetCardContainer">
      <SnippetList API={API} snippets={snippets}/>
      </section>
      </div>
    </>
  );
};
