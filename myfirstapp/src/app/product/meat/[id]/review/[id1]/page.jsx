import React from "react";

const page = async ({ params }) => {
  const { id, id1 } = await params;
  return (
    <div>
      meate item {id} review {id1}
    </div>
  );
};

export default page;
