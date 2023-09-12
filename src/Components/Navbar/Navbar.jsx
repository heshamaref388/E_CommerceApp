import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Images/freshcart-logo.svg";
import { cartContext } from "../Context/CartContext";

export default function Navbar({ crrUser, clearUserData }) {
  const { numOfCartItems, numOfWishlist } = useContext(cartContext);

  const navigate = useNavigate();
  function logoutUser() {
    clearUserData();
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top  ">
        <div className="container">
          <Link className="navbar-brand fw-bolder normal-font mb-lg-0">
            <img src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="Category">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="brands">
                    Brands
                  </Link>
                </li>
              </>
            </ul>
            <div className="right-nav navbar-nav ms-auto mb-0 mb-lg-0">
              <ul className="navbar-nav my-1">
                <li className="nav-item ">
                  <Link
                    className="nav-link position-relative"
                    aria-current="page"
                    to="/cart"
                  >
                    Cart<i className="fa-solid fa-cart-shopping ms-1 "></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {numOfCartItems}
                    </span>
                  </Link>
                </li>

                {crrUser ? (
                  <>
                    <li className="nav-item ">
                      <Link
                        className="nav-link position-relative"
                        aria-current="page"
                        to="/wishlist"
                      >
                        Wishlist
                        <i className="fa-regular fa-heart ms-1"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-success">
                          {numOfWishlist}
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/allorders">
                        All Orders
                      </Link>
                    </li>
                    <li
                      className="nav-item btn nav-link "
                      onClick={logoutUser}
                      // className="nav-link btn btn-outline-danger btn-sm"
                      aria-current="page"
                    >
                      Logout
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item me-0 me-lg-2 nav-link">
                      <Link
                        // className="nav-link btn btn-outline-success btn-sm"
                        aria-current="page"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item nav-link">
                      <Link aria-current="page" to="/register">
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
