import React from 'react'
import { useContext } from 'react'
import DataContext from './Context/dataContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API_Axios from './API/post'
import { format } from 'date-fns';


const NewPost = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { post, setPost } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const id = post.length ? post[post.length - 1] + 1 : 1;
    const lastPost = post.length ? post[post.length - 1] : { id: 0 };
    const id = lastPost.id + 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp") //format of date and time
    console.log(dateTime);
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

  return (
    <main className='NewPost'>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit} className="newPostForm">
        <label htmlFor="postTitle" className="postTitle">Title : </label>
        <input
          id='postTitle'
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter title'
        />
        <label htmlFor="postBody">Content : </label>
        <textarea
          id="postBody"
          required
          placeholder='Enter content'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button>Submit</button>

      </form>

    </main>
  )
}

export default NewPost