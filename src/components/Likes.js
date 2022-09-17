import { useState } from "react"
import Like from './Images/like1.gif';
import './Likes.css';



function Likes (){
  const [like1, updateLike] = useState (30)
  const [like2, updateLike2] = useState (39)
  const [like3, updateLike3] = useState (83)

  function onClick (){
    updateLike (like1 + 1)
  }

  function onClick2 (){
    updateLike2 (like2 + 1)
  }

  function onClick3 (){
    updateLike3 (like3 + 1)
  }

  return (
    <div className='likes'>
      <div className='likeDefault' data-testid="plus1" onClick={onClick}>
        <img src={Like} alt="likes" width={50} height={50} />
        <span data-testid="countLike1">{like1}</span>
        <span>Likes</span>
      </div>
      <div className='likeDefault' data-testid="plus2" onClick={onClick2}>
        <img src={Like} alt="likes" width={50} height={50} />
        <span data-testid ="countLike2">{like2}</span>
        <span>Likes</span>
      </div>
      <div className='likeDefault' data-testid="countLike3" onClick={onClick3}>
        <img src={Like} alt="likes" width={50} height={50} />
        <span data-testid="plus3">{like3}</span>
        <span>Likes</span>
      </div>
    </div> 
  );
}
export default Likes;