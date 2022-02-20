import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import recipeStore from "../stores/recipeStore";

const DeleteRecipeModal = ({ handleDeleteClose, isDeleteOpen }) => {
  const [chosenRecipe, setChosenRecipe] = useState({ id: "" });

  console.log(chosenRecipe.id);

  const handleChange = (e) => {
    setChosenRecipe({
      ...chosenRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    recipeStore.deleteRecipe(chosenRecipe.id);
    handleDeleteClose();
  };

  return (
    <Modal className="Modall" show={isDeleteOpen} onHide={handleDeleteClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select name="id" onChange={handleChange}>
            <option selected disabled>
              Choose an Recipe
            </option>
            {recipeStore.recipes.map((rec) => (
              <option key={rec._id} value={rec._id}>
                {rec.name}
              </option>
            ))}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Close
          </Button>
          <Button type="submit" variant="danger" onClick={handleDeleteClose}>
            Delete Recipe
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default DeleteRecipeModal;
