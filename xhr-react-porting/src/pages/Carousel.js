import { useContext } from "react";
import { StateContext } from "../App";
import CarouselButton from "../components/CarouselButton";
import CarouselItem from "../components/CarouselItem";

const Carousel = () => {
  const { dataList, carouselUlTag } = useContext(StateContext);

  return (
    <>
      <h1>휴대폰 종류</h1>
      <div className="container">
        <div className="carousel-wrapper">
          <ul className="carousel" ref={carouselUlTag}>
            {Object.values(dataList).map((element, index) => (
              <CarouselItem key={index} {...element} />
            ))}
          </ul>
          <CarouselButton />
        </div>
      </div>
    </>
  );
};

Carousel.defaultProps = {
  data: [],
};

export default Carousel;
