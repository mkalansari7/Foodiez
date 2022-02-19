import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ingredientStore from "../stores/ingredientStore";

const AddIngredientModal = ({ isOpen, handleClose }) => {
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) =>
    setNewIngredient({
      ...newIngredient,
      [e.target.name]: e.target.value,
    });

  const handleImage = (event) =>
    setNewIngredient({
      ...newIngredient,
      [event.target.name]: event.target.files[0],
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    ingredientStore.addIngredient(newIngredient);
    handleClose();
  };

  return (
    <Modal className="Modall" show={isOpen} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mt-2">
            <Form.Label>Ingredient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ingredient name"
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
          <Button type="submit" variant="danger" onClick={handleClose}>
            Add Ingredient
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddIngredientModal;
