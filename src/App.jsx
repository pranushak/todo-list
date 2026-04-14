import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {

  const todoList = [
    { id: 1, title: "review resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" }
  ]

  return (
    <div>
    <h1>Todo List</h1>
    <TodoList />
    <TodoForm />
  </div>
  )
}

export default App