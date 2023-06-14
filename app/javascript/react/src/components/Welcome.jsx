import * as React from 'react';
import QuestionList from './QuestionList';
import { createRoot } from 'react-dom/client';

const Welcome = () => {
  return (
    <div className='container'>
      <h1>Hello World!</h1>
      <QuestionList />
    </div>
  )
}

const container = document.getElementById('welcome');
const root = createRoot(container);
root.render(<Welcome />);

export default Welcome;