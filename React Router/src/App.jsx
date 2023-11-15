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

  const [post, setPost] = useState([
    {
      id: 1,
      title: "Web Development",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Web development is a dynamic field encompassing the creation and maintenance of websites and web applications. It involves a combination of front-end development, where user interfaces are crafted using technologies like HTML, CSS, and JavaScript, and back-end development, where servers and databases handle data processing and storage. Frameworks and libraries such as React, Angular, and Vue.js facilitate efficient front-end development, while back-end technologies like Node.js, Django, and Ruby on Rails empower server-side functionality. Additionally, web developers need to consider aspects like user experience, accessibility, and responsive design to ensure seamless interactions across diverse devices."
    },
    {
      id: 2,
      title: "Graphic Designing",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Graphic designing is a creative discipline that combines artistic flair with technical proficiency to visually communicate ideas. Graphic designers use tools like Adobe Creative Suite to craft visually appealing elements such as logos, illustrations, and layouts for print or digital media. They play a crucial role in branding, marketing, and user experience design, ensuring that visual elements effectively convey a message or evoke a specific response. A strong understanding of color theory, typography, and composition is essential for graphic designers to create compelling and aesthetically pleasing designs. As technology advances, graphic designers continue to embrace new tools and trends to stay at the forefront of visual communication. "
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Learning data structures and algorithms is fundamental for any aspiring programmer or software engineer. These concepts form the backbone of efficient problem-solving in programming. Data structures, such as arrays, linked lists, and trees, provide organized ways to store and manage data, while algorithms are step-by-step procedures for solving specific tasks. A solid understanding of these principles enhances problem-solving skills, optimizes code efficiency, and is crucial for technical interviews. Platforms like LeetCode and HackerRank offer valuable practice, allowing learners to implement and optimize algorithms, reinforcing the importance of choosing the right data structures for different scenarios. "
    },
    {
      id: 4,
      title: "Life : An eternal journey",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Life is a journey marked by a tapestry of experiences, challenges, and moments of joy. It's a continuous process of self-discovery, growth, and adaptation to the ever-changing circumstances. Each individual's path is unique, shaped by choices, relationships, and personal aspirations. Embracing the present, learning from the past, and anticipating the future contribute to the richness and depth of the human experience. The tapestry of life weaves together a myriad of experiences, emotions, and relationships, creating a unique and intricate pattern for each individual. Threads of joy, sorrow, love, and challenges intertwine, forming a rich mosaic that tells the story of our journey. Choices act as the vibrant hues, influencing the overall design."
    }
  ])

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