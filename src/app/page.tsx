"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/store.hook";
import { getProducts } from "../store/features/product.slice";
import ProductCard from "./_commponents/ProductCard/ProductCard";
import { Product } from "../types/product.type";

export default function Home() {
  const { data } = useAppSelector(function (store) {
    return store.productReducer;
  });

  const dispatch = useAppDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl text-center bg-slate-500 p-5">Fake store</h1>;
      </div>
      <div className="grid grid-cols-12 gap-3">
        {data === null
          ? "Loading"
          : data.map((products: Product) => (
              <ProductCard key={products.id} productInfo={products} />
            ))}
      </div>
    </>
  );
}
