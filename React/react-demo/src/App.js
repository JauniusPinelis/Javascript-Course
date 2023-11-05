import './App.css';
import Todo from './components/Todo';
import todoData from "./data/todos.json"

console.log(todoData)

function App() {
  return (
    <div className="App">
      <Todo key={todoData[0].id} title={todoData[0].title}></Todo>
      <Todo key={todoData[1].id} title={todoData[1].title}></Todo>
      <Todo key={todoData[2].id} title={todoData[2].title}></Todo>
    </div>
  );
}

export default App;
