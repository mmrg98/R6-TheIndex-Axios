import React, {useState, useEffect} from 'react';

import axios from "axios";
import ReactLoading from 'react-loading';

//import authors from "./data.js";
// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAuthors = async () =>{
    try{
    const response = await axios.get(`https://the-index-api.herokuapp.com/api/authors/`);
    const fetchedAuthors = response.data
    setAuthors(fetchedAuthors)
    setLoading(false)
    }catch(error){
    console.log(error)
    }
    }
    useEffect(()=> {
      fetchAuthors();
    }, [])

  const [currentAuthor, setCurrentAuthor] = useState(null);

  const selectAuthor = async (author) =>{
    setLoading(true)
    try{
    const response = await axios.get(`https://the-index-api.herokuapp.com/api/authors/${author.id}/`)
    const fetchedAuthors = response.data
    setCurrentAuthor(fetchedAuthors)
    setLoading(false)
    }catch(error){
    console.log(error)
    }
    }

  //const selectAuthor = author => setCurrentAuthor(author);

  const unselectAuthor = () => setCurrentAuthor(null);

  const getContentView = () => {
    if(!loading){
    if (currentAuthor) {
      return <AuthorDetail author={currentAuthor} />;
    } else {
      return <AuthorList authors={authors} selectAuthor={selectAuthor} />;
    }
    
  }
  return <div><ReactLoading type="spin" color="white" height={300} width={100} /></div>
  
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
