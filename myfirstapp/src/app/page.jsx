import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/" className={styles.Link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" className={styles.Link}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/product" className={styles.Link}>
            Product
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.Link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.Link}>
            Contact us
          </Link>
        </li>
        <li>
          <Link href="/about/branches" className={styles.Link}>
            Branches
          </Link>
        </li>
        <li>
          <Link href="/product/vegis" className={styles.Link}>
            vegis
          </Link>
        </li>
        <li>
          <Link href="/images" className={styles.Link}>
            images
          </Link>
        </li>
      </ul>
      <Link
        href="https://my-portfolio-jc4a.vercel.app/"
        target="_blank"
        id={styles.specialLink}
      >
        My site
      </Link>
    </>
  );
}
