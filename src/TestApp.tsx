import React from 'react';
import TestTodo from './components/TestTodo';

const TestApp: React.FC = () => {
  const todo = [{id: 'タスク1', text: 'ご飯を作る'}]
  return (
    <div className="App">
      <TestTodo items={todo} />
    </div>
  );
}


export default TestApp;