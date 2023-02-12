import { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6

const PostForm = ({ action, ...props }) => {

  const handleChange = value => {
    setPublishedDate(value);
  };

  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [description, setDescription] = useState(props.description);
  const [publishedDate, setPublishedDate] = useState(props.publishedDate);
  const [mainContent, setMainContent] = useState(props.mainContent)

  const handleSubmit = () => {

    action({ title, author, description, publishedDate, mainContent });

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
            <Form.Label>Published</Form.Label>
            <DatePicker
              selected={publishedDate}
              onChange={handleChange}
              dateFormat="dd-MM-yyyy"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Short description</Form.Label>
            <Form.Control value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Main content</Form.Label>
            <ReactQuill theme="snow" value={mainContent}
              onChange={setMainContent}
              placeholder="Enter content" />
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