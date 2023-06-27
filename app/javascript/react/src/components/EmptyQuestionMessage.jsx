import React from 'react'

const EmptyQuestionMessage = (props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>OOPs!</strong> No question found with the tag: {props.tagName}. Please select another option from the list

      <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default EmptyQuestionMessage;


