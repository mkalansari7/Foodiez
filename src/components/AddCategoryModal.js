import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import categoryStore from "../stores/categoryStore";

const AddCategoryModal = ({ isOpen, handleClose }) => {
  const [newCategory, setNewCategory] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) =>
    setNewCategory({
      ...newCategory,
      [e.target.name]: e.target.value,
    });

  const handleImage = (event) =>
    setNewCategory({
      ...newCategory,
      [event.target.name]: event.target.files[0],
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    categoryStore.addCategory(newCategory);
    handleClose();
  };

  return (
    <Modal className="Modall" show={isOpen} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mt-2">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category name"
              name="name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter image link"
              name="image"
              onChange={handleImage}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="dark" onClick={handleClose}>
            Add Category
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddCategoryModal;
