import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ingredientStore from "../stores/ingredientStore";

const DeleteIngredientModal = ({ handleDeleteClose, isDeleteOpen }) => {
  const [chosenIngredient, setChosenIngredient] = useState({ id: "" });

  console.log(chosenIngredient.id);

  const handleChange = (e) => {
    setChosenIngredient({
      ...chosenIngredient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ingredientStore.deleteIngredient(chosenIngredient.id);
    handleDeleteClose();
  };

  return (
    <Modal className="Modall" show={isDeleteOpen} onHide={handleDeleteClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Ingredient</Modal.Title>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Close
          </Button>
          <Button type="submit" variant="danger" onClick={handleDeleteClose}>
            Delete Ingredient
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default DeleteIngredientModal;
