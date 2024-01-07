import Nav from "./Nav";
import styles from "./Nav.module.css";

export default function Header() {
  return (
    <header className={styles.nav}>
      <Nav />
    </header>
  );
}
