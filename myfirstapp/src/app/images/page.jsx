import React from "react";
import Image from "next/image";
import img1 from "../../../public/next.jpg";

const page = () => {
  return (
    <div>
      <h1>image components</h1>
      <Image
        src={img1}
        alt="sample_img"
        style={{ width: "50%", height: "100%" }}
      />
      <Image
        src={
          "https://unsplash.com/photos/dramatic-sunset-over-a-rugged-coastline-with-cactus-foreground-xt5yt49f3_Y"
        }
        alt="sample2_image"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default page;
