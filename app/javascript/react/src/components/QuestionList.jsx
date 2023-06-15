import * as React from 'react';
import { useState, useEffect } from 'react';
import QuestionDetail from './QuestionDetail';

const QuestionList = () => {

  const [questionList, setQuestionList] = useState([]);
  const questionUrl = 'http://localhost:3000/api/v1/questions'

  const fetchQuestionList = () => {
    fetch(questionUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuestionList(data)
      })
  }
  
  useEffect(() => {
    fetchQuestionList()
  }, []);

  return (
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        {questionList.map((question) => 
          <QuestionDetail question={question} key={question.id} /> 
        )}
      </div>
    </div>
  )
}

export default QuestionList;