import React, { useState } from 'react';
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { db,auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

//firebase 9.8.4

const CreatePost = () => {

  const [ title, setTitle ] = useState([]);
  const [ postText, setPostText ] = useState([]);
  const navigate = useNavigate();

  const createPost = async() => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      },
    });
    navigate("/");
  };

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
