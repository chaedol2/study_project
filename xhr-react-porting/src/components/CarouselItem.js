import React from "react";

const CarouselItem = ({ name, productImg }) => {
  let imgUrl = "" + productImg;
  return (
    <li className="carousel-card">
      <div className="product-img-wrapper">
        <img src={imgUrl} alt="" />
      </div>
      <div className="product-name-wrapper">{name}</div>
    </li>
  );
};

export default React.memo(CarouselItem);
