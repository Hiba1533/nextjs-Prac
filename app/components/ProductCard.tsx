import Link from "next/link";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 truncate">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 capitalize">
            {product.category}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-blue-600 font-bold">
              ${product.price}
            </span>
            <span className="text-sm text-yellow-600">
              ★ {product.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}