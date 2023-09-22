import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

const CarouselImage = (props) => {
  var items = [
    {
      name: "Ram Krishna",
      description: "Probably the most random thing you have ever seen!",
      Image: "./Images/logo.png",
    },
    {
      name: "Sudarshan",
      description: "Hello World!",
      Image: "./Images/bio.jpg",
    },

    {
      name: "Sudarshan",
      description: "Hello World!",
      Image: "./Images/pic.jpg",
    },
    {
      name: "Sudarshan",
      description: "Hello World!",
      Image: "./Images/one.png",
    },
  ];
  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImage;
