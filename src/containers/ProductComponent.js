import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
      {products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.5   }} 
            
          >
            <Link
              to={`/product/${id}`}
              key={id}
              className="rounded shadow-lg border p-4 flex flex-col h-full"
            >
              <img
                className="w-full h-auto justify-center my-auto rounded-md"
                src={image}
                alt={title}
              />

              <div className="flex flex-col justify-between mt-auto">
                <div className="text-lg font-semibold">{title}</div>
                <div className="text-gray-500">{category}</div>
                <div className="text-gray-600 text-xl font-semibold ">
                  ${price}
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
