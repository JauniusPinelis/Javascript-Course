import { Card, ListGroup } from "react-bootstrap";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

type todoListProps = {
    todos: Todo[],
    setTodos: Function
}

export default function TodoList({ todos, setTodos }: todoListProps) {
    return <>
        <Card>
            <Card.Header>Todo List</Card.Header>
            <Card.Body>
                <ListGroup>

                    {todos.map(todo => {
                        return (
                            <ListGroup.Item key={todo.id}>
                                <TodoItem setTodos={setTodos} key={todo.id} todo={todo}></TodoItem>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    </>
}