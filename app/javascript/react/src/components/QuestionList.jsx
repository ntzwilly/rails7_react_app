import * as React from 'react';
import { useState, useEffect } from 'react';
import QuestionDetail from './QuestionDetail';
import EmptyQuestionMessage from './EmptyQuestionMessage';

const QuestionList = () => {
  const questionTags = [
    { label: 'All', value: 0},
    { label: 'Ruby', value: 1},
    { label: 'Rails', value: 2},
    { label: 'React', value: 3},
    { label: 'Bootstrap', value: 4},
    { label: 'Javascript', value: 5},
  ]
  const [questionList, setQuestionList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(questionTags[0].value)


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

  const updateSelectedItem = (event) => {
    setQuestionList([])
    setSelectedOption(event.target.value)
    fetch(questionUrl + `?tags=${questionTags[event.target.value].label}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setQuestionList(data)
  })
  }

  return (
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        <p className='lead fw-bold'>Filter questions by Tags</p>
        <select className='form-select form-select-lg' 
                value={selectedOption}
                onChange={event => updateSelectedItem(event)}
        >
          {
            questionTags.map(tag => (
              <option key={tag.value} value={tag.value}>{tag.label}</option>
            ))
          }
        </select>

        {
          questionList.length > 0 ?
          questionList.map((question) => 
            <QuestionDetail question={question} key={question.id} /> 
          ) : <EmptyQuestionMessage tagName={questionTags[selectedOption].label} />
        }
  
      </div>
    </div>
  )
}

export default QuestionList;