import React, { useState } from "react";

import categoryStore from "../stores/categoryStore";
import Card from "./Card";
import AddCategoryModal from "./AddCategoryModal";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import "../Styles/Category.css";
import UpdateCategoryModal from "./UpdateCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";

const CategoryList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const handleUpdateClose = () => setIsUpdateOpen(false);
  const handleUpdateOpen = () => setIsUpdateOpen(true);

  const handleDeleteClose = () => setIsDeleteOpen(false);
  const handleDeleteOpen = () => setIsDeleteOpen(true);

  return (
    <div className="main-page">
      {/* header */}
      <div>
        <h3>categories</h3>
        <button onClick={handleOpen}>Add a new Category</button>
        <button onClick={handleUpdateOpen}>Update a Category</button>
        <button onClick={handleDeleteOpen}>Delete a Category</button>
      </div>
      {/* content */}

      <div className="content">
        {categoryStore.categories.map((cate) => (
          <Link key={cate._id} to={`/categories/${cate.slug}`}>
            <Card name={cate.name} image={cate.image} />
          </Link>
        ))}
      </div>
      {/* footer */}
      <AddCategoryModal isOpen={isOpen} handleClose={handleClose} />
      <UpdateCategoryModal
        isUpdateOpen={isUpdateOpen}
        handleUpdateClose={handleUpdateClose}
      />
      <DeleteCategoryModal
        isDeleteOpen={isDeleteOpen}
        handleDeleteClose={handleDeleteClose}
      />
    </div>
  );
};

{
  /* <div>
<ul className="row">
  {categoryStore.categories.map((category) => (
    // <MemberItem key={member.id} member={member} />
    <Link
      key={category.id}
      to={`/categorys/${category.slug}`}
      className="col-lg-6 col-md-12"
    >
      <li className="card d-flex flex-row align-items-center">
        <p className="fs-4 m-0 text-nowrap overflow-hidden">
          {category.name}
        </p>
      </li>
    </Link>
  ))}
</ul>
</div> */
}

export default observer(CategoryList);
