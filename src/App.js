import React, { useState } from "react";

import authors from "./data.js";
// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

const App = () => {
  const [currentAuthor, setCurrentAuthor] = useState(null);

  const selectAuthor = author => setCurrentAuthor(author);

  const unselectAuthor = () => setCurrentAuthor(null);

  const getContentView = () => {
    if (currentAuthor) {
      return <AuthorDetail author={currentAuthor} />;
    } else {
      return <AuthorList authors={authors} selectAuthor={selectAuthor} />;
    }
  };

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar unselectAuthor={unselectAuthor} />
        </div>
        <div className="content col-10">{getContentView()}</div>
      </div>
    </div>
  );
};

export default App;
