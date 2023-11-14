import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Todo from "../models/Todo";
import { useState } from "react";

type CreateTodoFormProps = {
    setTodos: (todos: Todo[] | ((todos: Todo[]) => {})) => void;
}

const CreateTodoForm = ({ setTodos }: CreateTodoFormProps) => {

    const [title, setTitle] = useState<string>("");
    const [completed, setCompleted] = useState(false)

    function handleSubmit(e: Event): void {
        e.preventDefault();
        setTodos((currentTodos: Todo[]) => {
            return [...currentTodos, { id: currentTodos.length + 1, title, completed } as Todo]
        })
    }

    return <>
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter a new todo"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">

                            <Form.Check
                                type="checkbox"
                                label="Completed"
                                name="completed"
                                checked={completed}
                                onChange={(e) => setCompleted(e.target.checked)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Button variant="primary" type="submit">
                                Add Todo
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
}

export default CreateTodoForm