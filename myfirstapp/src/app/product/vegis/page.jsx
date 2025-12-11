import React from "react";
import Link from "next/link";

const page = () => {
  const vegis = [
    {
      id: 1,
      name: "tomata",
    },
    {
      id: 2,
      name: "spinach",
    },
    {
      id: 3,
      name: "mushroom",
    },
    {
      id: 4,
      name: "garlic",
    },
    {
      id: 5,
      name: "corn",
    },
  ];
  return (
    <div>
      vegitble page
      <ul>
        {vegis.map((vegi, id) => {
          return (
            <li key={id}>
              <Link href={`/product/vegis/${vegi.name}`}>{vegi.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
