import React, { useState } from 'react';
import "./CreatePost.css";

const CreatePost = () => {

  const [ titile, setTitle ] = useState([]);
  const [ postText, setPostText ] = useState([]);

  const createPost = () => {
    console.log(titile);
    console.log(postText);
  } ;

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>Create Post</h1>
        <div className="inputPost">
          <div>Titile</div>
          <input 
            type="text" 
            placeholder='Write title' 
            onChange={(event) => setTitle(event.target.value)}
           />
        </div>
        <div className="inputPost">
          <div>Blog</div>
          <textarea 
            placeholder='Write your blog'
            onChange={(event) => setPostText(event.target.value)}
           />
        </div>
        <button 
          className='postButton'
          onClick={createPost}
        >Post your blog</button>
      </div>
    </div>
  )
}

export default CreatePost
