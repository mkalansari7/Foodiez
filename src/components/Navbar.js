import React, { useState } from "react";
import "../Styles/NavbarStyle.css";
import { NavLink, Link } from "react-router-dom";

import bootstrap from "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import AddRecipeModal from "./AddRecipeModal";
import AddCategoryModal from "./AddCategoryModal";
import AddIngredientModal from "./AddIngredientModal";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen2(false);
  };
  const handleOpen = () => setIsOpen(true);
  const handleOpen1 = () => setIsOpen1(true);
  const handleOpen2 = () => setIsOpen2(true);

  window.addEventListener("DOMContentLoaded", (event) => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector("#sideNav");
    if (sideNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: "#sideNav",
        offset: 74,
      });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  });

  return (
    <div className="page-top">
      {/* <!-- Navigation--> */}
      <nav
        class="navbar navbar-expand-lg navbar-dark fixed-top"
        id="sideNav"
        style={{ background: "#6dbfb8" }}
      >
        <div className="ali">
          <a class="navbar-brand js-scroll-trigger" href="/">
            <span class="d-block d-lg-none" id="logois">
              Foodiez
            </span>
            <span class="d-none d-lg-block">
              <img
                class="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="http://localhost:8000/media/1645451334043foodiz%20logo%20(2).jpg"
                alt="..."
              />
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/categories">
                  All categories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/recipes">
                  All recipies
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/ingredients">
                  All ingredients
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" onClick={handleOpen1}>
                  Create category
                </a>
                <AddCategoryModal isOpen={isOpen1} handleClose={handleClose} />
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" onClick={handleOpen}>
                  Create recipe
                </a>
                <AddRecipeModal isOpen={isOpen} handleClose={handleClose} />
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" onClick={handleOpen2}>
                  Create ingredient
                </a>
                <AddIngredientModal
                  isOpen={isOpen2}
                  handleClose={handleClose}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
