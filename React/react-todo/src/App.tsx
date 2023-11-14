import { useState, useEffect } from 'react'
import CreateTodoForm from './components/CreateTodoForm.tsx'
import { Col, Container, Row } from 'react-bootstrap'
import TodoList from './components/TodoList'
import Todo from './models/Todo'
import todoData from "./data/todoData.ts";
import useLocalStorage from './hooks/useLocalStorage.ts'

function App() {

  //const [todos, setTodos] = useState<Todo[]>([])
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos")

  // useEffect(() => {
  //   setTodos(todoData)
  // }, [])

  return (
    <div>
      <Container  >
        <Row className='mt-5'>
          <Col>
            <TodoList setTodos={setTodos} todos={todos}></TodoList>
          </Col>
          <Col>
            <CreateTodoForm setTodos={setTodos}></CreateTodoForm>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
