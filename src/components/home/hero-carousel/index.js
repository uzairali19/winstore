import { isEmpty, isArray } from "lodash";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import PRODUCTS_AND_CATEGORIES_QUERY from "../../../queries/product-and-categories"



const HeroCarousel = ( props ) => {
    const { product } = props;
  return ( 
    <div className="win-carousel">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://www.winstore.pk/wp-content/uploads/2020/12/WinCard-Banner-2-2.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.winstore.pk/wp-content/uploads/2021/01/Fashion-Banner-Option-4.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.winstore.pk/wp-content/uploads/2021/01/Web-Banner-1.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.winstore.pk/wp-content/uploads/2021/01/banner-1.jpg" alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default HeroCarousel;

// const HeroCarousel = ({ heroCarousel }) => {
//   if (isEmpty(heroCarousel) || !isArray(heroCarousel)) {
//     return null;
//   }

//   const autoPlay = true;
//   const slideDuration = 2; // in seconds
//   const activeIndexRef = useRef({ activeIndex: 0 });
//   const slideRef = useRef(0);
//   const [slide, setSlide] = useState(0);
//   const [restartSlide, setRestartSlide] = useState(0);
//   const { activeIndex } = activeIndexRef.current;

//   /**
//    * Change to next slide.
//    */
//   const nextSlide = () => {
//     if (1 === heroCarousel.length) {
//       return null;
//     }

//     /**
//      * If if autoplay is set to true
//      * and all slides are finished playing,
//      * set the activeIndex to one and restart the slide from start.
//      */
//     if (activeIndexRef.current.activeIndex === heroCarousel.length - 1) {
//       activeIndexRef.current.activeIndex = 0;
//       setRestartSlide(restartSlide + 1);
//     } else {
//       // If its not the last slide increment active index by one.
//       activeIndexRef.current.activeIndex =
//         activeIndexRef.current.activeIndex + 1;
//     }

//     slideRef.current = slideRef.current + 1;
//     setSlide(slideRef.current);
//   };

//   useEffect(() => {
//     if (autoPlay) {
//       const interval = setInterval(() => nextSlide(), slideDuration * 1000);
//       return () => clearInterval(interval);
//     }
//   }, []);

//   return (
//     // <div classNameName="banner flex flex-col sm:flex-row justify-between overflow-hidden">
//     //     <div classNameName="banner-img sm:w-8/12">
//     //         {
//     //             heroCarousel.map( ( item, index ) => {
//     //                 const opacity = ( activeIndex === index || 1 === heroCarousel.length ) ? 'opacity-100' : 'opacity-0';
//     //                 return (
//     //                     <div key={item?.id}classNameName={`${opacity} banner-img-container absolute top-0 left-0`}>
//     //                         <img
//     //                             src={item?.image?.sourceUrl} srcSet={item?.image?.srcSet} loading="lazy"
//     //                         />
//     //                     </div>
//     //                 )
//     //             })
//     //         }
//     //         <div classNameName="slider-button">
//     //             <button classNameName="focus:outline-none" onClick={nextSlide}>
//     //                 <svg width="25px" classNameName="inline-block mr-3"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
//     //             </button>
//     //             <button classNameName="focus:outline-none" onClick={nextSlide}>
//     //                 <svg width="25px" classNameName="inline-block"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
//     //             </button>
//     //         </div>
//     //     </div>
//     //     <div classNameName="banner-content pt-10 sm:pt-0 px-10 sm:w-4/12">
//     //         <h2 classNameName="banner-content__title text-base md:text-4xl uppercase">{heroCarousel[activeIndex]?.name}</h2>
//     //         <p classNameName="banner-content__description text-base md:text-2xl text-gray-700">{heroCarousel[activeIndex]?.description}</p>
//     //         <Link href={`/category/${heroCarousel[activeIndex]?.slug}/`}>
//     //             <a classNameName="banner-content__link text-gray-700">+ Explore</a>
//     //         </Link>
//     //     </div>
//     // </div>

//   );
// };

// export default HeroCarousel;
