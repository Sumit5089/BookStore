import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-xl md:text-4xl">
            "Explore our enriching courses and elevate your reading experience
            at <span className="text-pink-500">our bookstore"</span> :)
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            assumenda nostrum obcaecati libero sequi adipisci commodi voluptatum
            non ad error, saepe beatae quibusdam inventore dolores cupiditate
            sint eveniet aliquam provident modi. Omnis illum quisquam culpa
            autem quasi, numquam quas, consequuntur similique fuga ratione
            dolore voluptas cum corrupti odit, placeat esse!
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white rounded-md px-4 py-2 mt-5 hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap mx-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
