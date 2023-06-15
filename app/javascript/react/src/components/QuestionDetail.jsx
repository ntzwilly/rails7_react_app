import * as React from 'react';
import { useState } from 'react';

class QuestionDetail extends React.Component {
  // const[likeCount, setLikeCount] = useState(0);
  constructor(props) {
    super(props)
    this.state = { 
      likeCount: 0,
      dislikeCount: 0
    }

    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this)
  }
  
  handleLike = () => this.setState((state) => {
    return {
      likeCount: state.likeCount + 1
    }
  })

  handleDislike = () => this.setState((state) => {
    return {
      dislikeCount: state.dislikeCount + 1
    }
  })

  render() {
    return (
      <div className='card rounded-0 mt-3'>
        <div className='card-body'>
          <h3 className='card-title'>{this.props.question.title}</h3>
          <p className='lead'>
            <span className='badge bg-primary'>{this.props.question.tag}</span>
          </p>
          <button type="button" 
                  className="btn btn-primary position-relative me-4"
                  onClick={this.handleLike}
          >
            Like
            {
              this.state.likeCount > 0 ? 
              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{this.state.likeCount}</span> : ''
            }
          </button>      
          <button type="button" 
                  className="btn btn-primary position-relative"
                  onClick={this.handleDislike}
          >
            Dislike
            {
              this.state.dislikeCount > 0 ? 
              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{this.state.dislikeCount}</span> : ''
            }
          </button>      
        </div>
      </div>
    );
  }

}


// const QuestionDetail = (props) => {

//   const[likeCount, setLikeCount] = useState(0);
//   const handleLike = () => setLikeCount(likeCount + 1)
//   const handleDislike = () => likeCount > 0 && setLikeCount(likeCount - 1)

//   return (
//     <div className='card rounded-0 mt-3'>
//       <div className='card-body'>
//         <h3 className='card-title'>{props.question.title}</h3>
//         <p className='lead'>
//           <span className='badge bg-primary'>{props.question.tag}</span>
//         </p>
//         <button className='btn btn-primary mt-1' 
//                 onClick={handleLike}>
//           Like
//         </button>
//         {
//           likeCount > 0 ? 
//           <span className='badge bg-danger'>{likeCount}</span> : ''
//         }
//         <button className='btn btn-warning mt-1' 
//                 onClick={handleDislike}>
//           Dislike
//         </button>
//       </div>
//     </div>
//   );
// }

export default QuestionDetail;