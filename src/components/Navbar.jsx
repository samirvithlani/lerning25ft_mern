import React from "react";
import { Link } from "react-router-dom";

//props ->object ->{title:"React"}
export const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/movies">
                movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/shows">
                shows
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo">
                usestatedemo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo2">
                usestatedemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo3">
                usestatedemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestateDemo4">
                usestateDemo4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/ipl">
                IPL
              </Link>
            </li>
            
            
            <li class="nav-item">
              <Link class="nav-link" to="/inputhandling1">
              inputhandling1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/inputhandling2">
              inputhandling2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
              form demo 1
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
