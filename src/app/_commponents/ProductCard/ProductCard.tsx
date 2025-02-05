import { Product } from "../../../types/product.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProductCard({ productInfo }: { productInfo: Product }) {
  const router = useRouter();

  const { id, image, title, price, rating, description, category } =
    productInfo;
  return (
    <div
      className="col-span-12 lg:col-span-6 xl:col-span-2 gap-2 shadow-lg py-3 px-1 cursor-pointer space-y-1"
      onClick={() => {
        setTimeout(() => {
          router.push(`/productdetails/${id}`);
        }, 400);
      }}
    >
      <Image
        src={image}
        alt=""
        className="w-full h-48 object-contain "
        width={100}
        height={100}
      />
      <h2 className="text-3xl font-semibold text-slate-800 line-clamp-1">
        {title}
      </h2>
      <h3 className="text-red-300 font-semibold">{category}</h3>
      <p className="line-clamp-2 text-slate-400 ">{description}</p>
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Price: {price} EL</span>
        <span className="text-yellow-400">{rating.rate} Rating</span>
      </div>
    </div>
  );
}
