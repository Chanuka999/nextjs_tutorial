import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>Services page</h1>
      <button>
        <Link href="/">Back to home</Link>
      </button>
    </>
  );
};

export default page;
