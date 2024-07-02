import React from "react";
import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hook/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>

      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((img) => (
          <GifCard key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
