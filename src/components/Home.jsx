import React from 'react';

const Home = () => {
  return (
    <div className='homepage'>
      <div className="postContents">
        <div className="postHeader">
          <h1>Tittle</h1>
        </div>
        <div className="postTextContainer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse necessitatibus non illo nam impedit. Natus totam, consectetur aperiam ut alias molestiae dolore facilis, ducimus asperiores illum itaque cum in assumenda praesentium tenetur, magni autem maiores unde illo voluptatum nihil saepe veniam. Modi magni eaque, totam ipsa facilis iste expedita!
          <div className="nameAndDeleteButton">
          <h3>@Tomomann</h3>
          <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
