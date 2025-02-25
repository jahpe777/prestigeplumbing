import React from "react";
import PropTypes from "prop-types";

const Testimonial = ({ image, alt, message, name, prof }) => {
  return (
    <div
      className="flex flex-col justify-center items-center
      bg-gray-200  overflow-hidden shadow-lg p-3 rounded-md"
    >
      <img
        className="rounded-full w-24 border-2 border-white"
        src={image}
        alt={alt}
      />
      <div className="py-4 text-center px-4">
        <blockquote className="text-gray-700 dark:text-gray-300">
          <i className="fa-solid fa-quote-left mx-1 text-deepBlue" />
          <p className="text-sm text-black line-clamp-6">{message}</p>
          <i className="fa-solid fa-quote-right mx-1 text-deepBlue" />
        </blockquote>
      </div>
      <div className="px-6 pt-4 pb-2 text-center flex flex-col space-y-1">
        <span className="text-deepBlue font-bold">{name}</span>
        <span className="text-gray-700">{prof}</span>
      </div>
    </div>
  );
};
// props validation should be propTypes
Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  prof: PropTypes.string.isRequired,
};
export default Testimonial;
