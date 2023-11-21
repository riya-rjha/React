import React from 'react'
import { Route, Routes } from 'react-router-dom' //React Router Version 6
//Switch - Routes & useHistory - useNavigate
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import EditPostPage from './EditPostPage.jsx';
import { DataProvider } from './Context/dataContext.jsx';

const App = () => {

  return (
    <div className="App">
      <Header title={"React JS Blog"} />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route exact path="/post" element={<NewPost />}>
          </Route>
          <Route exact path="/post/:id" element={<PostPage />}>
          </Route>
          <Route path="/edit/:id" element={<EditPostPage />}>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div >
  );
}

export default App