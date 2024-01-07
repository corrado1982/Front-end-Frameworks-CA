import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import cartIcon from "../../assets/cartIcon.png";
import { useCart } from "../../context/CartContext";

export default function Nav() {
  const { totalItems } = useCart();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">
            {totalItems !== 0 ? totalItems : null}
            <img src={cartIcon}></img>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
