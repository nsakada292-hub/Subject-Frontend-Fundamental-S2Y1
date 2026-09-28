import { useState } from 'react'
import type { ProductType } from '../../lib/product'

export default function ProductSlideListComponent() {
  // Current product index
  const [index, setIndex] = useState(0);

  // Product list
  const productList: ProductType[] = [
    {
      image:
        "https://tubecafecambodia.com/wp-content/uploads/2025/01/Thnol-Coffee-1-683x1024-1.png",
      title: "Thnol Cafe",
      description: "Freshly brewed Thnol coffee.",
      price: 2.2,
    },
    {
      image:
        "https://tubecafecambodia.com/wp-content/uploads/2025/01/Wildberry-Raspberry-Tea-1-683x1024-1-768x859.png",
      title: "Wildberry Raspberry Tea",
      description: "Iced tea with a wildberry raspberry blend.",
      price: 3,
    },
    {
      image:
        "https://tubecafecambodia.com/wp-content/uploads/2025/01/Fresh-Passion-Juice-1-683x1024-1.png",
      title: "Fresh Passion Juice",
      description: "Juice made from fresh passion fruit.",
      price: 2.89,
    },
    {
      image:
        "https://tubecafecambodia.com/wp-content/uploads/2025/01/Green-Milk-Tea-1-683x1024-1.png",
      title: "Green Milk Tea",
      description: "Creamy green milk tea.",
      price: 3,
    },
  ];

  // Next product
  const handleNext = () => {
    if (index < productList.length - 1) {
      setIndex(index + 1);
    }
  };

  // Previous product
  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="container mx-auto">

      {/* Current index */}
      <h1 className="text-center mb-4 text-2xl font-bold">
        Index: {index}
      </h1>

      {/* Current product */}
      <section className="flex justify-center">
        {/* <ProductCardComponent
          image={productList[index].image}
          title={productList[index].title}
          description={productList[index].description}
          price={productList[index].price}
        /> */}
      </section>

      {/* Buttons */}
      <section className="flex justify-center gap-4 mt-6">

        {/* Previous */}
        <button
          className="border rounded bg-red-500 px-6 py-3 text-white"
          disabled={index === 0}
          style={{
            opacity: index === 0 ? 0.5 : 1,
            cursor: index === 0 ? "not-allowed" : "pointer",
          }}
          onClick={handlePrevious}
        >
          Previous
        </button>

        {/* Next */}
        <button
          className="border rounded bg-blue-500 px-6 py-3 text-white"
          disabled={index === productList.length - 1}
          style={{
            opacity:
              index === productList.length - 1 ? 0.5 : 1,
            cursor:
              index === productList.length - 1
                ? "not-allowed"
                : "pointer",
          }}
          onClick={handleNext}
        >
          Next
        </button>

      </section>
    </section>
  )
}
