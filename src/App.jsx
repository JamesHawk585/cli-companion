import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.jsx";
import SnippetList from "./SnippetList/SnippetList.jsx";

const API = 'http://127.0.0.1:5555/snippets'

export default () => {


  return (
    <>
    <main className="app">
      <Header />
      <SnippetList API={API}/>
      </main>
    </>
  );
};
