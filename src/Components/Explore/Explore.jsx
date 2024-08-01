import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsives = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const Explore = ({ image, country }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleAfterChange = (_, state) => {
      setCurrentSlide(state.currentSlide);
    };
    return (
        <div>
             <div className="relative group overflow-hidden rounded-[10px] shadow-lg">
        <img
          src={image}
          alt={country}
          className="w-full h-[350px] object-cover rounded-[10px] transition-transform duration-200 ease-in-out group-hover:scale-125"
        />
        <span className="bg-orange rounded-lg px-5 text-white text-xs absolute top-5 right-5 font-bold leading-8 whitespace-pre">
          3 Tours
        </span>
        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-5 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:bg-opacity-100">
          <p className="text-green text-xl font-bold flex flex-col">
            Travel to<span className="text-white text-2xl group-hover:text-gray-800">
              {country}
            </span>
          </p>
          <div className="absolute top-5 right-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button className="bg-orange text-white p-2 rounded-full">
              <IoArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto pt-24">
            <div className="py-10">
              <div className="flex flex-col items-center">
                <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                  <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
                  <h6 className="text-green relative font-semibold">
                    Popular activities
                  </h6>
                </div>
                <h3 className="lg:text-5xl text-3xl font-bold pb-8 text-center py-4">
                  Explore Real Adventure
                </h3>
              </div>

              <div className="py-8">
                <Carousel
                  responsive={responsives}
                  infinite
                  autoPlay={true}
                  itemClass="px-2"
                >
                  <Explore country="United Kindom" image="/src/assets/hero1.jpeg" />
                  <Explore country="France" image="/src/assets/hero1.jpeg" />
                  <Explore country="Singapore" image="/src/assets/hero1.jpeg" />
                  <Explore country="Thailand" image="/src/assets/hero1.jpeg" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Explore;