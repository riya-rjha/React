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
import API_Axios from './API/post.jsx'
import EditPostPage from './EditPostPage.jsx';

const App = () => {

  const [post, setPost] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  const handleDelete = async (id) => {
    try {
      const data = await API_Axios.delete(`/posts/${id}`);
      const postLists = post.filter(posts => posts.id !== id);
      setPost(postLists);
      navigate('/');//Navigate to home page -> history.push() - V5
    }
    catch (error) {
      console.log(`Error : ${error.message}`);
    }
  }


  const handleEdit = async (id) => {
    const dateTime = format(new Date(), "MMMM dd, yyyy pp") //format of date and time
    const updatedPost = { id, title: editTitle, dateTime, body: editBody };
    try {
      const response = await API_Axios.put(`/posts/${id}`, updatedPost);
      setPost(post.map(post =>
        (post.id === id) ? { ...response.data } : post
      ));
      setEditBody('');
      setEditTitle('');
      navigate('/')

    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const id = post.length ? post[post.length - 1] + 1 : 1;
    const lastPost = post.length ? post[post.length - 1] : { id: 0 };
    const id = lastPost.id + 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp") //format of date and time
    const newPost = { id, title: title, dateTime, body: body };
    try {
      const response = await API_Axios.post('/posts', newPost);
      const allPosts = [...post, response.data];
      setPost(allPosts);
      setTitle('');
      setBody('');
      navigate('/'); //history.push('/') -V5
    }
    catch (error) {
      console.log(`Error : ${error.message}`);
      console.log('Data:', error.response.data);
      console.log('Headers:', error.response.headers);
    }
  }

  useEffect(() => {
    const filteredResults = post.filter(posts => (
      ((posts.title.toLowerCase()).includes(search.toLowerCase()))
    ))

    setSearchResults(filteredResults.reverse()); //reverses the elements of array
  }, [post, search]);

  //Using AXIOS API Requests
  useEffect(() => {
    const fetchResultsAXIOS = async () => {
      try {
        const data_2 = await API_Axios.get('/posts'); //object name in data.json
        setPost(data_2.data);
      } catch (error) {
        if (error.message) {
          console.log(error.data_2.status);
          console.log(error.data_2.data);
          console.log(error.data_2.headers);
        }
        else {
          //It could not catch the error
          //Eg. 404 Error
          console.log(`Error : ${error.message}`);
        }
      }
    }
    fetchResultsAXIOS();
  }, [])


  return (
    <div className="App">
      <Header title={"React JS Blog"} />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={
          <Home
            post={searchResults}
          />
        }>
        </Route>
        <Route exact path="/post" element={
          <NewPost
            title={title}
            setTitle={setTitle}
            body={body}
            setBody={setBody}
            handleSubmit={handleSubmit}
          />
        }>
        </Route>
        <Route exact
          path="/post/:id"
          element={
            <PostPage
              post={post}
              handleDelete={handleDelete}
            />
          }
        >
        </Route>
        <Route
          path="/edit/:id"
          element={
            <EditPostPage
              post={post}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
            />
          }
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