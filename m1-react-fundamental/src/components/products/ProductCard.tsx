import { useEffect, useState } from "react"
import ProductCardComponent, { type ProductInterface } from './ProductCardComponent'

type UserType = {
  id: number
  title: string
  price: number
  description: string
  images: string[0]
  category: { name: string }
}

export default function ProductCardList() {
  
  // userEffect syntax
  // userEffect(()=>{},dependencies)
  // 1. none dependencies
  // 2. array dependencies (mount once)
  // 3. list dependencie (specific name of list)

  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    async function fetchingUsers() {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const userData = await response.json();
      setUsers(userData);
    }
    fetchingUsers(); // call function so we can use.
  }, [])

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      {users?.map((pro: ProductInterface) => (
        <ProductCardComponent
          key={pro.title}
          images={pro?.images[0]}
          title={pro?.title}
          price={pro?.price}
          description={pro?.description}
        />
      ))}
    </div>
  )
}
