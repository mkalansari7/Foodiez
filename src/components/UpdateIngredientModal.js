import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ingredientStore from "../stores/ingredientStore";

const UpdateIngredientModal = ({ isUpdateOpen, handleUpdateClose }) => {
  const [updatedIngredient, setUpdatedIngredient] = useState({
    name: "",
    image: "",
  });

  const [chosenIngredient, setChosenIngredient] = useState({ id: "" });

  const handleChange = (e) => {
    setUpdatedIngredient({
      ...updatedIngredient,
      [e.target.name]: e.target.value,
    });
    setChosenIngredient({
      ...chosenIngredient,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (event) =>
    setUpdatedIngredient({
      ...updatedIngredient,
      [event.target.name]: event.target.files[0],
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    ingredientStore.updateIngredient(updatedIngredient, chosenIngredient.id);
    handleUpdateClose();
  };

  return (
    <Modal className="Modall" show={isUpdateOpen} onHide={handleUpdateClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Update Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select name="id" onChange={handleChange}>
            <option selected disabled>
              Choose an Ingredient
            </option>
            {ingredientStore.ingredients.map((ing) => (
              <option key={ing._id} value={ing._id}>
                {ing.name}
              </option>
            ))}
          </Form.Select>
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
          <Button variant="secondary" onClick={handleUpdateClose}>
            Close
          </Button>
          <Button type="submit" variant="danger" onClick={handleUpdateClose}>
            Update Ingredient
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateIngredientModal;
