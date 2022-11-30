import CarouselLeftButton from "./CarouselLeftButton";
import CarouselRightButton from "./CarouselRightButton";

const CarouselButton = () => {
  return (
    <div className="button-wrapper">
      <CarouselLeftButton />
      <CarouselRightButton />
    </div>
  );
};

export default CarouselButton;
