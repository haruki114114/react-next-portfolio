import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/">TOP</Link>
          </li>
          <li className={styles.item}>
            <Link href="/about-me">about-me</Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog">blog</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}