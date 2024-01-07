import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/contact"> Contact</Link>
    </footer>
  );
}
