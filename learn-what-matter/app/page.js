"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [Images, setImages] = useState([]);

  /*useEffect(() => {
    getImages()
  }, []) */
  
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(Images);
    } catch (error) {
      console.error("Error Fetching Images");
    }
  };
  return (
    <div>
      <button
        onClick={getImages}
        className="px-5 py-3 bg-green-600 text-white font-bold"
      >
        Get Images
      </button>
      <div className="p-10">
        {Images.map((elem, i) => {
          return (
            <img
              key={i}
              src={elem.download_url}
              width={300}
              height={300}
              className="m-10 rounded inline-block"
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
