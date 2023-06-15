import * as React from 'react';
import { useState } from 'react';

const QuestionDetail = (props) => {

  const[likeCount, setLikeCount] = useState(0);
  const handleLike = () => setLikeCount(likeCount + 1)
  const handleDislike = () => likeCount > 0 && setLikeCount(likeCount - 1)

  return (
    <div className='card rounded-0 mt-3'>
      <div className='card-body'>
        <h3 className='card-title'>{props.question.title}</h3>
        <p className='lead'>
          <span className='badge bg-primary'>{props.question.tag}</span>
        </p>
        <button className='btn btn-primary mt-1' 
                onClick={handleLike}>
          Like
        </button>
        {
          likeCount > 0 ? 
          <span className='badge bg-danger'>{likeCount}</span> : ''
        }
        <button className='btn btn-warning mt-1' 
                onClick={handleDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
}

export default QuestionDetail;