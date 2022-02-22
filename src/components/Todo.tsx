import React from 'react';

// const Todo = () => {
//   return <ul>これはTodo.tsxから来ています。</ul>
// }


type StateType = {
  todos: {id: number, title: string}[]
  item: string
  updateItem: React.FormEvent<HTMLInputElement>
};

// interface TodoProps {
//   todos: {id: number, title: string}[]
// };

type Props = {
  onChange: (event: any) => void

}

function Todo(props: StateType): JSX.Element {
  const todos = props.todos.map(todo => {
    return (
      <li key={todo.id}>{todo.title}</li>
    );
  })

  const form: React.FC<Props> = props => (
    <form>
      {/* <input type="text" value={props.item} onChange={props.updateItem} /> */}
      <input type="submit" value="追加" />
    </form>
  );


  return (
    <div>
      {todos}
      {form}
    </div>
  )

}



export default Todo;