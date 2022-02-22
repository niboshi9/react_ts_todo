import React from 'react';

interface TodoProps {
  items: {id: string, text: string}[]
};

const TestTodo: React.FC<TodoProps> = props => {
  return (
    <ul>
      {props.items.map(list => (
        <li key={list.id}>{list.text}</li>
      ))}
    </ul>
  )
}

export default TestTodo;