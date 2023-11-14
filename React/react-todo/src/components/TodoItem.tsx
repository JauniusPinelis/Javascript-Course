
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Todo from "../models/Todo";

type TodoDisplayProps = {
    todo: Todo,
    setTodos: Function,
}

export default function TodoItem({ todo, setTodos }: TodoDisplayProps) {

    function updateCompleted(selectedTodo: Todo): void {
        //set the new state of todos
        setTodos((prevTodos: Todo[]) => {
            return prevTodos.map((todo: Todo) => {
                if (todo.id == selectedTodo.id) {
                    return { ...todo, completed: !selectedTodo.completed }
                } else {
                    return todo;
                }
            })
        })
    }

    function removeTodo(todoToRemove: Todo): void {
        setTodos((currentTodos: Todo[]) => {
            return currentTodos.filter((todo) => todo.id != todoToRemove.id)
        })
    }

    return <>
        <Card>
            <Card.Body>
                <Row>
                    <Col xs="1"> <Form.Check onChange={() => updateCompleted(todo)} checked={todo.completed} type="checkbox" /></Col>
                    <Col style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</Col>
                    <Col className="d-flex justify-content-end"> <Button onClick={() => removeTodo(todo)} variant="danger">Delete</Button></Col>
                </Row>


            </Card.Body>
        </Card>
    </>
}