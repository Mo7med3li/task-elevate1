"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/store.hook";
import { getProducts } from "../store/features/product.slice";
import ProductCard from "./_commponents/ProductCard/ProductCard";
import { Product } from "../types/product.type";
import { useFormik } from "formik";
import Loading from "./loading";

export default function Home() {
  const [searchProducts, setSearchProducts] = useState<Product[] | null>(null);
  const { data } = useAppSelector(function (store) {
    return store.productReducer;
  });
  const formik = useFormik({
    initialValues: {
      searchInput: "",
    },
    onSubmit: () => {},
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  function searchProduct(value: string) {
    if (data === null) {
      return "";
    }

    const filterData = data.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase());
    });
    setSearchProducts(filterData);
  }

  if (data === null) {
    return <Loading />;
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto space-y-3">
        <h1 className="text-3xl text-center bg-slate-500 p-5 ">Fake store</h1>
        <input
          type="search"
          className="w-full p-2 border-2"
          placeholder="Enter your product"
          value={formik.values.searchInput}
          onChange={(e) => {
            formik.handleChange(e);
            searchProduct(e.target.value);
          }}
          name="searchInput"
        />
        <div className="grid grid-cols-12 gap-3">
          {searchProducts === null
            ? data.map((product) => (
                <ProductCard productInfo={product} key={product.id} />
              ))
            : searchProducts.map((product) => (
                <ProductCard productInfo={product} key={product.id} />
              ))}
        </div>
      </div>
    </>
  );
}
