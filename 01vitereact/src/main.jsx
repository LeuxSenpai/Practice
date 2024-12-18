import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const anotherElement=(
  <a href='https://chatgpt.com/' target='_blank'>nigga</a>
)

const reactElement=React.createElement(
  'a',
  {href:'http://www.google.com',target:'_blank'},
  "click me ",
  anotherElement,

)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement,

    <App/>
  
);
