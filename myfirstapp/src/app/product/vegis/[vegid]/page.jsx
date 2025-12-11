import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const { vegid } = await params;
  return (
    <>
      <div>vegi item {vegid}</div>
      <div>
        <button>
          <Link href="/product/vegis">Back to</Link>
        </button>
      </div>
    </>
  );
};

export default page;
