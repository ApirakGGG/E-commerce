"use client";
import { formatPrice } from "@/untils/formatPrice";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <div
      onClick={() => router.push(`product/${data.id}`)}
      className="col-span-1 cursor-pointer 
      bg-white  p-2  hover:scale-110 text-center text-sm rounded-xl transition"
    >
      <div className="flex flex-col items-center w-full gap-1 rounded-xl transition">
        <div className="aspect-square overflow-hidden relative w-full rounded-xl transition">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="font-semibold  mt-5">{data.name}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
