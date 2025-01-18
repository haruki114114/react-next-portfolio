import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">TOP</Link>
      </h1>
      <Menu />
    </header>
  );
}