import { useEffect, useState } from "react";
import ProductCardComponent from "./ProductCardComponent";
import { fetchProducts, type ProductType } from "../lib/api";

const PRODUCTS_PER_PAGE = 9;

export default function ProductCardList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<{ [key: number]: boolean }>({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchingProducts() {
      try {
        const productData = await fetchProducts();
        setProducts(productData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load products");
      }
    }
    fetchingProducts();
  }, []);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8 flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {error ? (
          <p className="text-red-600 font-medium">Error: {error}</p>
        ) : paginatedProducts.map((product) => {
          const isWishlisted = wishlist[product.id] || false;

          return (
            <ProductCardComponent
              key={product.id}
              product={product}
              isWishlisted={isWishlisted}
              onToggleWishlist={toggleWishlist}
            />
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-6 py-2 rounded font-semibold text-sm transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Previous
          </button>

          <span className="text-gray-700 font-medium text-sm">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-6 py-2 rounded font-semibold text-sm transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
