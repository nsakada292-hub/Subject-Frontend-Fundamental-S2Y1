export type ProductType = {
  id: number
  title: string
  price: number
  description: string
  images: string[]
}

export async function fetchProducts(): Promise<ProductType[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }
  return response.json();
}
