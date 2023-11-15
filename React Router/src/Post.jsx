import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <article className='post'>
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
            </Link>
            {(post.body).length <= 85
                ? post.body
                : `${(post.body).slice(0, 85)}...`}
        </article>
    )
}

export default Post