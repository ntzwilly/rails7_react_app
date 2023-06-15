import * as React from 'react';
import QuestionDetail from './QuestionDetail';

const QuestionList = () => {
  const QuestionList = [
    {
      id: 1,
      title: "How to check if a key is present in a hash?", 
      tag: "Ruby"
    }, 
    {
      id: 2,
      title: "What is the difference between strings and symbols?", 
      tag: "Ruby"
    }, 
    {
      id: 3,
      title: "What happen if you add two keys with the same name in a hash?", 
      tag: "Ruby"
    }, 
    {
      id: 4,
      title: "How to delete a given key from a hash?", 
      tag: "Ruby"
    }, 
    {
      id: 5,
      title: "How the check if two hashes are equals?", 
      tag: "Ruby"
    }, 
    {
      id: 6,
      title: "How to combine two hashes in ruby?", 
      tag: "Ruby"
    }, 
    {
      id: 7,
      title: "How to get unique keys from 2 hashes?", 
      tag: "Ruby"
    }, 
    {
      id: 8,
      title: "What does has_key?, key?, member? and include? method in a hash?", 
      tag: "Ruby"
    }, 
    {
      id: 9,
      title: "What are blocks in ruby?", 
      tag: "Ruby"
    }, 
    {
      id: 10,
      title: "Does the order of keys matters to compare two hashes in ruby?", 
      tag: "Ruby"
    }, 
  ]

  return (
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        {QuestionList.map((question) => 
          <QuestionDetail question={question} key={question.id} /> 
        )}
      </div>
    </div>
  )
}

export default QuestionList;