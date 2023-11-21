import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useContext } from 'react'
import DataContext from './Context/dataContext'
import API_Axios from './API/post'
import { useNavigate } from 'react-router-dom'

const PostPage = () => {

  const { post, setPost } = useContext(DataContext);
  const { id } = useParams();
  const posts = post.find(post => (post.id).toString() === id);
  const navigate = useNavigate();

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

  return (
    <main className='PostPage'>
      <article className="post">
        {posts &&  //if post exists the run the following fragment tag
          <>
            <h2>{posts.title}</h2>
            <p className='postDate'>{posts.dateTime}</p>
            <p className="postBody">{posts.body}</p>
            <Link to={`/edit/${posts.id}`}>
              <FaEdit className="icon" />
            </Link>
            <AiOutlineDelete
              className='icon'
              onClick={() => handleDelete(posts.id)}
            />
          </>
        }
      </article>
      {!posts &&  //if post exists the run the following fragment tag
        <>
          <h2>Sorry, post not found!</h2>
          <h2>
            <Link to='/'>Navigate to our home page</Link>
          </h2>
        </>
      }
      <article className="error" style={{
        width: "320px",
        height: "180px",
        padding: "10px",
        textAlign: "center"
      }}>
      </article>
    </main >
  )
}

export default PostPage