import * as React from 'react';
import QuestionList from './QuestionList';
import { createRoot } from 'react-dom/client';

class Welcome extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Hello World!</h1>
        <QuestionList />
      </div>
    )
  }
}

const container = document.getElementById('welcome');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);

export default Welcome;