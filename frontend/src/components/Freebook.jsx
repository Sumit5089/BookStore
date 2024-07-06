import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

export const Freebook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        setBook(res.data.filter((item) => item.category === "Fiction"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  // const filteredList = List.filter((item) => item.category === "Fiction");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className="font-semibold text-xl p-2 mt-4">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          dolores ullam incidunt quis aliquam eius. Maiores aliquam assumenda ad
          fugit molestiae alias veritatis, officia sed nobis, illum distinctio
          fugiat illo!
        </p>
        </div>
      </div>
      <div className="p-5 mx-3">
        <Slider {...settings}>
         {book.map((item) => (
            < Cards item={item} key={item.id}/>
         ))}
        </Slider>
      </div>
    </>
  );
};
