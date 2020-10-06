import React, { useState } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

const AuthorList = props => {
  const [authors, setAuthors] = useState([]);

  const [query, setQuery] = useState("");

  const filterAuthors = query => setQuery(query);

  const filteredAuthors = props.authors.filter(author =>
    `${author.first_name} ${author.last_name}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  const authorCards = filteredAuthors.map(author => (
    <AuthorCard
      key={author.id}
      author={author}
      selectAuthor={props.selectAuthor}
      fetchAuthors={props.fetchAuthors}
    />
  ));

  
  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar filterAuthors={filterAuthors} />
      <div className="row">{authorCards}</div>
    </div>
  );
};

export default AuthorList;
