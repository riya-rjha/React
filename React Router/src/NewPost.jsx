import React from 'react'

const NewPost = ({ title, setTitle, body, setBody, handleSubmit }) => {
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
        rows={10}
        cols={25}
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