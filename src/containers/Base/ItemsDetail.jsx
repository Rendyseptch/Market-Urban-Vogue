
import { motion } from "motion/react";

export const ItemsDetail = ({ product }) => {
  const { image, title, price, category, description } = product;
  return (
    <div className="   max-w-screen-2xl sm:flex-row bg-white cursor-auto my-24 mx-auto shadow-lg">
      <div className="relative mx-auto flex flex-col-2">
        <img
          src={image}
          className=" w-full sm:w-1/2  mx-auto items-center justify-center max-w-md mb-4 rounded-lg "
        ></img>
        <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 1 }}
        className=" sm:w-1/2 max-w-2xl lg:my-2 lg:max-w-2xl lg:mx-auto  ">
          <p className="  mb-2 font-semibold text-base text-gray-400">
            Product -{" "}
            {category
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}
          </p>
          <h1 className="lg:text-4xl md:text-4xl font-semibold py-4  ">{title}</h1>
          <h2 className=" text-xl font-medium mb-2">Description</h2>
          <p className=" text-slate-400 text-lg">{description}</p>
          <p className="  my-5 font-semibold lg:text-5xl md:text-5xl text-xs">$ {price}</p>

          <button className="px-20 py-4 bg-lime-400 rounded-full font-bold ease-in-out duration-200 transform hover:scale-105 hover:bg-lime-500">
            Buy It Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};
