import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";

const UpdateCategoryModal = ({ isUpdateOpen, handleUpdateClose }) => {
  const [updatedCategory, setUpdatedCategory] = useState({
    name: "",
    image: "",
  });

  const [chosenCategory, setChosenCategory] = useState({ id: "" });

  const handleChange = (e) => {
    setUpdatedCategory({
      ...updatedCategory,
      [e.target.name]: e.target.value,
    });
    setChosenCategory({
      ...chosenCategory,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (event) =>
    setUpdatedCategory({
      ...updatedCategory,
      [event.target.name]: event.target.files[0],
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    categoryStore.updateCategory(updatedCategory, chosenCategory.id);
    handleUpdateClose();
  };

  return (
    <Modal className="Modall" show={isUpdateOpen} onHide={handleUpdateClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select name="id" onChange={handleChange}>
            <option selected disabled>
              Choose an Category
            </option>
            {categoryStore.categories.map((ing) => (
              <option key={ing._id} value={ing._id}>
                {ing.name}
              </option>
            ))}
          </Form.Select>
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
          <Button variant="secondary" onClick={handleUpdateClose}>
            Close
          </Button>
          <Button type="submit" variant="danger" onClick={handleUpdateClose}>
            Update Category
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateCategoryModal;
