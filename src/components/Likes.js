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
      <div className='like' onClick={onClick}>
        <img src={Like} alt="likes" width={50} height={50} />
        <span>Likes{like1}</span>
      </div>
      <div className='like' onClick={onClick2}>
        <img src={Like} alt="likes" width={50} height={50} />
        <span>Likes{like2}</span>
      </div>
      <div className='like' onClick={onClick3}>
        <img src={Like} alt="likes" width={50} height={50} />
        <span>Likes: {like3}</span>
      </div>
    </div> 
  );
}
export default Likes;