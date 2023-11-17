import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const PostPage = ({ post, handleDelete }) => {

  const { id } = useParams();
  const posts = post.find(post => (post.id).toString() === id);

  return (
    <main className='PostPage'>
      <article className="post">
        {posts &&  //if post exists the run the following fragment tag
          <>
            <h2>{posts.title}</h2>
            <p className='postDate'>{posts.datetime}</p>
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