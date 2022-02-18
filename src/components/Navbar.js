import React from "react";
import "../Styles/NavbarStyle.css";
import { NavLink, Link } from "react-router-dom";

import bootstrap from "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
const Navbar = () => {
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
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <div className="ali">
          <a class="navbar-brand js-scroll-trigger" href="/">
            <span class="d-block d-lg-none" id="logois">
              Foodiez
            </span>
            <span class="d-none d-lg-block">
              <img
                class="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="assets/img/logo.jpg"
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
                <a class="nav-link js-scroll-trigger" href="#interests">
                  Interests
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#awards">
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
