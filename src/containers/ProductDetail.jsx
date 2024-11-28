import React, { startTransition, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import { ItemsDetail } from "./Base/ItemsDetail";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductsDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductsDetail();
    return ()=> {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div class="relative flex justify-center items-center mx-auto my-72">
        <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-lime-400"></div>
        <img src="https://www.svgrepo.com/show/235241/renewable-energy.svg"  class="rounded-full h-28 w-28"/>
    </div>
      ) : (
        <div>
           <ItemsDetail
           product={product}/>
        </div>
      )}
     
    </div>
  );
};
export default ProductDetail;
