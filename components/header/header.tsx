import Link from "next/link";
import styles from "./header.module.css"; // Import the CSS module

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.title}>
          <h1>WEB SPACE</h1>
        </div>
        <div className={styles.navRow}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/about-us">About</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
