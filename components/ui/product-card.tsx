"use client";

import Image from "next/image";

import { Product } from "@/types";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          fill
          src={data?.images[0]?.url}
          alt={data?.name}
          
        />
      </div>
    </div>
  );
};

export default ProductCard;
