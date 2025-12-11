import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>Contact us page</h1>
      <Link href="/" className={styles.Link}>
        Home
      </Link>
    </>
  );
};

export default page;
