import React from "react";

const page = async ({ params }) => {
  const resolve = await params;
  console.log(resolve);

  return (
    <>
      <div>catch all routes</div>
      <ul>
        {resolve.dpath?.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default page;
