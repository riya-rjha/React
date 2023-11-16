import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react';

const EditPostPage = ({ post, handleEdit, editTitle, setEditTitle, editBody, setEditBody }) => {
    const { id } = useParams(); //used to access dynamic url partner, eg. id (/Home/id)
    const posts = post.find(post => (post.id).toString() === id);
    useEffect(() => {
        if (posts) {
            setEditBody(posts.body);
            setEditTitle(posts.title);
        }
    }, [posts, setEditBody, setEditTitle])
    return (
        <main className='NewPost'>
            {editTitle &&
                <>
                    <h1>Edit Post</h1><form onSubmit={(e) => e.preventDefault()} className="newPostForm">
                        <label htmlFor="postTitle" className="postTitle">Title : </label>
                        <input
                            id='postTitle'
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            placeholder='Enter title' />
                        <label htmlFor="postBody">Content : </label>
                        <textarea
                            id="postBody"
                            required
                            placeholder='Enter content'
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)} />
                        <button onClick={() => handleEdit(posts.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Sorry, post not found!</h2>
                    <h2>
                        <Link to='/'>Navigate to our home page</Link>
                    </h2>
                </>
            }
        </main>
    )
}

export default EditPostPage