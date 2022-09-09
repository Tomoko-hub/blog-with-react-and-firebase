import React from 'react';
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>Create Post</h1>
        <div className="inputPost">
          <div>Titile</div>
          <input type="text" placeholder='Write title' />
        </div>
        <div className="inputPost">
          <div>Post</div>
          <textarea placeholder='Write post' />
        </div>
        <button className='postButton'>Post your blog</button>
      </div>
    </div>
  )
}

export default CreatePost
