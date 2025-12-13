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
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&q=80"
        alt="sample2_image"
        width={1000}
        height={700}
      />
      <Image
        src="https://images.pexels.com/photos/10571242/pexels-photo-10571242.jpeg"
        alt="sample3_image"
        width={1000}
        height={700}
      />
    </div>
  );
};

export default page;
