import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import cartIcon from "../../assets/cartIcon.png";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">
            <img src={cartIcon}></img>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
