import React from 'react'
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom' //React Router Version 6
//Switch - Routes & useHistory - useNavigate
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { format } from 'date-fns';

const App = () => {

  const [post, setPost] = useState();
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleDelete = (id) => {
    const postLists = post.filter(posts => posts.id !== id);
    setPost(postLists);
    navigate('/');//Navigate to home page -> history.push() - V5
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = post.length ? post[post.length - 1] + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp") //format of date and time
    const newPost = {id, title:title, dateTime, body:body};
    const allPosts = [...post, newPost];
    setPost(allPosts);
    setTitle('');
    setBody('');
    navigate('/');
  }

  useEffect(() => {
    const filteredResults = post.filter(posts => (
       ((posts.title.toLowerCase()).includes(search.toLowerCase()))
    ))

    setSearchResults(filteredResults.reverse()); //reverses the elements of array
  }, [post, search]);


  return (
    <div className="App">
      <Header title={"React JS Blog"} />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home
          post={searchResults}
        />}>
        </Route>
        <Route exact path="/post" element={<NewPost
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          handleSubmit={handleSubmit}
        />}>
        </Route>
        <Route exact
          path="/post/:id"
          element={<PostPage
            post={post}
            handleDelete={handleDelete}
          />}

        >
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App