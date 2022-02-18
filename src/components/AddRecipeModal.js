import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";

import recipeStore from "../stores/recipeStore";

const AddRecipeModal = ({ isOpen, handleClose }) => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    category: "",
    ingredients: "",
    description: "",
  });

  const handleChange = (e) =>
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    recipeStore.addRecipe(newRecipe);
    handleClose();
  };

  return (
    <Modal className="Modall" show={isOpen} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mt-2">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter recipe name"
              name="name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image link"
              name="image"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label>Choose category</Form.Label>
            <Form.Select name="category" onChange={handleChange}>
              <option selected disabled>
                Choose a category
              </option>
              {categoryStore.categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Form.Select>

            <Form.Group className="mt-2">
              <Form.Label>ingredients</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your ingredients"
                name="ingredients"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your description"
                name="description"
                onChange={handleChange}
                required
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="danger" onClick={handleClose}>
            Add Recipe
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddRecipeModal;
