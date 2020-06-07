import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./MediaCard.js"
import MediaCard from './MediaCard.js';

const  Hi = (props) =>{
  return <div>
          <h1>Expample 1</h1>
          Hello <strong>{props.name}</strong>
          <h1 className="heading-1">Plain Function</h1>
          <ul className= "list">
            <li>Function</li>
            <li>Arrow Function</li>
          </ul>
          <br/>
          { 5 + 10}
          <hr/>
          <h1>Expample 2</h1>

        </div>;
}

ReactDOM.render(<Hi name="Sir M.Ahsin"/>, document.querySelector('#root'));
ReactDOM.render(<MediaCard/>, document.querySelector('#sub-root'));