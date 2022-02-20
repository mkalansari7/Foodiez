import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";

const DeleteCategoryModal = ({ handleDeleteClose, isDeleteOpen }) => {
  const [chosenCategory, setChosenCategory] = useState({ id: "" });

  console.log(chosenCategory.id);

  const handleChange = (e) => {
    setChosenCategory({
      ...chosenCategory,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    categoryStore.deleteCategory(chosenCategory.id);
    handleDeleteClose();
  };

  return (
    <Modal className="Modall" show={isDeleteOpen} onHide={handleDeleteClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select name="id" onChange={handleChange}>
            <option selected disabled>
              Choose a category
            </option>
            {categoryStore.categories.map((ing) => (
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
            Delete Category
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default DeleteCategoryModal;
