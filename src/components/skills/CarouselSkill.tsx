import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";

function CarouselSkill() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      className="owl-carousel owl-theme skill-slider mt-3"
    >
      <div className="item">
        <img src={meter1} alt="proyect" />
        <h5>React</h5>
      </div>
      <div className="item">
        <img src={meter2} alt="asdasd" />
        <h5>Typescript</h5>
      </div>
      <div className="item">
        <img src={meter3} alt="asdasd" />
        <h5>Logo Design</h5>
      </div>
      <div className="item">
        <img src={meter1} alt="asdasdasd" />
        <h5>Node.js</h5>
      </div>
    </Carousel>
  );
}

export default CarouselSkill;
