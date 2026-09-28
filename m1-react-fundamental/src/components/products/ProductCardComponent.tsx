type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

type ProductCardProps = {
  product: ProductType;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
};

export default function ProductCardComponent({
  product,
  isWishlisted,
  onToggleWishlist,
}: ProductCardProps) {
  const DISCOUNT_PERCENTAGE = "-20%";
  const STRIKETHROUGH_MULTIPLIER = 1.25;
  const FALLBACK_IMAGE = "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg";
  const CATEGORY_TEXT = "Audio";
  const BADGE_TEXT = "New Release";
  const RATING_TEXT = "136 reviews";
  const ADD_TO_CART_TEXT = "Add to Cart";

  return (
    <div className="w-full max-w-md bg-white rounded shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 font-sans antialiased text-gray-900">
      {/* Product Image Section */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <img
          src={product.images?.[0] || FALLBACK_IMAGE}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
        />

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider">
          {BADGE_TEXT}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute top-4 right-4 bg-white bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center shadow-sm transition-colors duration-200 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
            !isWishlisted ? "text-gray-500 hover:text-pink-600" : "text-pink-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill={isWishlisted ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Product Details Section */}
      <div className="p-6">
        {/* Category */}
        <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">
          {CATEGORY_TEXT}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-3 truncate">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">{RATING_TEXT}</span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>


        {/* Price and CTA */}
        <div className="mt-8 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
          <div className="price-container">
            <div className="text-gray-400 line-through text-sm mb-1">
              ${(product.price * STRIKETHROUGH_MULTIPLIER).toFixed(2)}
            </div>
            <div className="flex items-center">
              <div className="text-3xl font-extrabold text-gray-900">
                ${product.price.toFixed(2)}
              </div>
              <div className="ml-3 px-2 py-1 bg-pink-100 text-pink-700 rounded-md font-semibold text-sm">
                {DISCOUNT_PERCENTAGE}
              </div>
            </div>
          </div>

          <button className="w-full lg:w-auto bg-indigo-600 text-white px-6 py-3 rounded font-semibold text-base shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
              <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {ADD_TO_CART_TEXT}
          </button>
        </div>
      </div>
    </div>
  );
}
