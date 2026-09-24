"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Loading from "../../components/Loading";
import { Product } from "../../types/product";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data);
        setActiveImage(data.images[0]);
        setLoading(false);
      })
      .catch(() => {
        setError("Product not found.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (error) {
    return (
      <p className="text-center text-red-500 py-16">{error}</p>
    );
  }
  if (!product) return null;

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back to products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        <div>
          <img
            src={activeImage}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg border border-gray-200"
          />
          <div className="flex gap-2 mt-3">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="preview"
                onClick={() => setActiveImage(img)}
                className={
                  activeImage === img
                    ? "w-16 h-16 object-cover rounded border-2 border-blue-600 cursor-pointer"
                    : "w-16 h-16 object-cover rounded border border-gray-200 cursor-pointer"
                }
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {product.title}
          </h1>
          <p className="text-sm text-gray-500 mt-1 capitalize">
            {product.brand} • {product.category}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
            <span className="text-sm text-green-600">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-yellow-600 mt-2">
            ★ {product.rating} rating
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            {product.description}
          </p>

          <p className="mt-4 text-sm">
            {product.stock > 0 ? (
              <span className="text-green-600">
                In Stock ({product.stock})
              </span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}