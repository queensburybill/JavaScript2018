import React from 'react';
import './WordList.css';
import { ListGroupItem } from 'react-bootstrap';

const WordList = ({ list }) => {
  return (
    <div className="wordlistContainer">
      {list.map(word => {
        return (
          <div>
            <ListGroupItem bsStyle="success">
              {word.japanese[0].reading}
            </ListGroupItem>
            <ListGroupItem bsStyle="info">
              {word.senses[0].english_definitions[0]}
            </ListGroupItem>
          </div>
        );
      })}
    </div>
  );
};
export default WordList;
