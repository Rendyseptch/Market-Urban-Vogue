import React, { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { GrdProduct } from "./Base/Hero/GridProduct";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  });
  console.log("products : ", products);
  return (
    <div className="">
      <div>
        <GrdProduct />
 
      </div>
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
