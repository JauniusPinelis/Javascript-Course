import { useState, useEffect } from 'react'
import AddTodoForm from './components/AddTodoForm'
import { Col, Container, Row } from 'react-bootstrap'
import TodoList from './components/TodoList'
import Todo from './models/Todo'
import todoData from "./data/todoData.ts";

function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    setTodos(todoData)
  }, [])

  return (
    <div>
      <Container >
        <Row className='mt-5'>
          <Col>
            <TodoList setTodos={setTodos} todos={todos}></TodoList>
          </Col>
          <Col>
            <AddTodoForm></AddTodoForm>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
