import React from "react";

const page = async ({ params }) => {
  const { vegid } = await params;
  return <div>vegi item {vegid}</div>;
};

export default page;
