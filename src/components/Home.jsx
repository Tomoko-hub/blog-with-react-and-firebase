import React from 'react';
import { useEffect, useState } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import "./Home.css";

const Home = () => {
  const [ postList, setPostList ] = useState([]);

  useEffect(() => {
    const getPosts = async  () =>{
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
   };
    getPosts();
  },[]);

  return (
    <div className='homepage'>
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">
              {post.postsText}
            </div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              <button>Delete</button>
            </div>
          </div>    
        )
      })}
    </div>
  )
}

export default Home;
