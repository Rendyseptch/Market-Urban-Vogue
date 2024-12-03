import React, { useState } from "react";  
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"; 
import Button from "./Base/Button/Button";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProduct = (cat) => {
    const updatedList = products.filter((product) => product.category === cat);
    setFilteredProducts(updatedList);  
  };

  const showAllProducts = () => {
    setFilteredProducts(products);  
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4 max-w-7xl mx-auto">
        <Button className="lg:text-xl text-xs" onClick={showAllProducts} text="All" />
        <Button
          className="lg:text-xl text-xs"
          onClick={() => filterProduct("men's clothing")}
          text="Men's Product"
        />
        <Button
          className="lg:text-xl text-xs"
          onClick={() => filterProduct("women's clothing")}
          text ="Women's Product"
        />
        <Button
          className="lg:text-xl text-xs"
          onClick={() => filterProduct("jewelery")}
          text="Jewelry"
        />
        <Button
          className="lg:text-xl text-xs lg:translate-x-0 md:translate-x-0 translate-x-20"
          onClick={() => filterProduct("electronics")}
          text="Electronics"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
        {filteredProducts.map((product) => {
          const { id, title, image, price, category } = product;
          return (
            <motion.div
              key={id} 
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 40 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`/product/${id}`}
                className="rounded shadow-lg border p-4 flex flex-col h-full"
              >
                <img
                  className="w-full h-auto justify-center my-auto rounded-md"
                  src={image}
                  alt={title}
                />
                <div className="flex flex-col justify-between mt-auto">
                  <div className="lg:text-lg md:lg:text-lg sm:text-xs text-xs font-semibold">{title}</div>
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
    </div>
  );
};

export default ProductComponent;
