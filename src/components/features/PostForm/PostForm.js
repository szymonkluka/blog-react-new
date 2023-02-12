import { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";


const PostForm = ({ action, ...props }) => {



  const [title, setTitle] = useState(props.published);
  const [author, setAuthor] = useState(props.published);
  const [description, setDescription] = useState(props.published);
  const [published, setPublished] = useState(props.published);

  const handleSubmit = () => {

    action({ title, author, description, published });

  };

  return (
    <Row className="justify-content-center">
      <Col className="col-7">

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author</Form.Label>
            <Form.Control value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Published</Form.Label>
            <Form.Control value={published}
              onChange={(e) => setPublished(e.target.value)}
              placeholder="Enter date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Short description</Form.Label>
            <Form.Control value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description" />
          </Form.Group>

          <Button
            onClick={handleSubmit}
            className="my-3">Add post
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default PostForm;