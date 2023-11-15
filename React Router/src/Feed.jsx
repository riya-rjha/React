import React from 'react'
import Post from './Post.jsx'

const Feed = ({ post }) => {
    return (
        <main>
            {post.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </main>
    )
}

export default Feed