"use client";
import { use, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/store.hook";
import Image from "next/image";
import { getDetails } from "../../../store/features/product.slice";
import Loading from "../../../app/loading";

type id = { productId: string };
export default function Page({ params }: { params: Promise<id> }) {
  const { productId } = use(params);
  console.log(productId);
  console.log(params);

  const dispatch = useAppDispatch();

  const { productDetails } = useAppSelector((store) => {
    return store.productReducer;
  });
  useEffect(() => {
    dispatch(getDetails(productId));
  }, []);

  return (
    <section>
      {productDetails === null ? (
        <Loading />
      ) : (
        <>
          <div className="max-w-screen-xl mx-auto p-3 shadow-lg space-y-7 text-center ">
            <Image
              src={productDetails.image}
              alt=""
              className="  object-contain mx-auto  "
              width={100}
              height={100}
            />
            <h2 className="text-3xl font-semibold text-slate-800 ">
              {productDetails.title}
            </h2>
            <h3 className="text-red-300 font-semibold">
              {productDetails.category}
            </h3>
            <p className=" text-slate-400 ">{productDetails.description}</p>
            <div className="flex  justify-between">
              <span className="font-semibold">
                Price: {productDetails.price} EL
              </span>
              <span className="text-yellow-400">
                {productDetails.rating.rate} Rating
              </span>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
