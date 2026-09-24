"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";
import ProductGrid from "./components/ProductGrid";
import Loading from "./components/Loading";
import { Product, ProductsResponse } from "./types/product";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data: ProductsResponse) => {
        setProducts(data.products);

        const unique: string[] = [];
        data.products.forEach((p) => {
          if (!unique.includes(p.category)) {
            unique.push(p.category);
          }
        });
        setCategories(unique);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong.");
        setLoading(false);
      });
  }, []);

  const filtered = products.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pb-16">
      <Hero />
      <SearchBar value={search} onChange={setSearch} />

      {loading && <Loading />}

      {error && (
        <p className="text-center text-red-500 py-10">{error}</p>
      )}

      {!loading && !error && (
        <>
          <CategoryList
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <div className="max-w-6xl mx-auto px-4 mt-8">
            <ProductGrid products={filtered} />
          </div>
        </>
      )}
    </main>
  );
}