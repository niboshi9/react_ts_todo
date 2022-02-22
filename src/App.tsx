import React from 'react';
// import Todo from './components/Todo';

// interface TodoProps {
//   itmes: {id: number, title: string}[]
// };


// const App: React.FC = () => {
//   const todo = [{id: 1, title: 'ご飯を作る'}]
//   return (
//     <div className="App">
//       <Todo items={todo} />
//     </div>
//   )
// }


interface StateType {
  todos: ITodo[];
  item: string;
}
interface ITodo {
  id: number;
  title: string;
}

// type StateType = {
//   todos: {id: number, title: string}[]
//   item: string
// }



// const todos: ITodo[] = [
//   {id: 1, title: 'ご飯を作る'},
//   // {id: 2, title: '洗濯物をする'}
// ]

class App extends React.Component<{}, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
      item: ""
    };
    this.updateItem = this.updateItem.bind(this);
  }

  Todo() {
    // return this.state.todos.map(todo => <li key={todo.id}>{todo.title}</li>)
    return (
      this.state.todos.map(todo => {
        return (  
          <li key={todo.id}>{todo.title}</li>
        );
      })
    )
  }

  updateItem(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ item: e.currentTarget.value });
  }

  addTodo() {
    // e.preventDefault();
    // const item: ITodo = {
    //   id: Math.random(),
    //   title: this.state.item
    // };

    // const todos = this.state.todos.slice();
    // todos.push(item);
    // this.setState({ todos: todos });

    const {todos, item}: StateType = this.state;
    const todo: ITodo = {
      id: Math.random(),
      title: item
    };
    this.setState({ todos: todos.concat(todo), item:"" })
  }

  render() {
    return (
      <div>
        <h1>Todoリスト</h1>
        <ul>{this.Todo()}</ul>
        {/* <form onSubmit={this.addTodo}> */}
          <input type="text" value={this.state.item} onChange={this.updateItem} />
          <button onClick={() => this.addTodo()}>登録</button>
          {/* <input type="submit" value="送信" /> */}
        {/* </form> */}
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <h1>Todo リスト</h1>
  //       <Todo
  //         todos={this.state.todos} 
  //         item={this.state.item}
  //         updateItem={this.updateItem}
  //       />
  //     </div>
  //   );
  // }
}


export default App;
