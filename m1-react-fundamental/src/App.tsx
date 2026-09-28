import './App.css'
import { FooterComponent } from './components/layout/FooterComponent';
import NavbarComponent from './components/layout/NavbarComponent';
import ProductCardList from './components/products/ProductCard';
import ProductCardComponent from './components/products/ProductCardComponent';
import ProductSlideListComponent from './components/products/ProductSlideListComponent';
import type { ProductType } from './lib/product';

function App() {
  
  // const productList: ProductType[] = [
  //   {
  //     image: "https://i.pinimg.com/1200x/8b/42/68/8b42683e8035f41161b584cc68ec0855.jpg",
  //     title: "Men Shirt",
  //     description: "it’s all about standing out, standing alone and being rarree of em all shop",
  //     price: 10
  //   },
  //   {
  //     image: "https://i.pinimg.com/736x/ff/c5/07/ffc507f04b9acceef442b37f717fe8b0.jpg",
  //     title: "Men Shirt 2",
  //     description: "Level up your rotation.",
  //     price: 9
  //   },
  //   {
  //     image: "https://i.pinimg.com/1200x/59/66/b2/5966b27c9b5743b0149658904617ab5e.jpg",
  //     title: "Men Shirt 3",
  //     description: "Vintage premium streetwear, inspired by nostalgia. All designs created by FREND. Designed to be UNISEX and oversized.",
  //     price: 12.5
  //   }
  // ];

  return (
    <>
    {/* // <main>
    //   <section>
    //     <NavbarComponent/>
    //   </section>

    //   <section> */}
    //     {/* <div className="flex flex-row flex-wrap justify-center items-start gap-6 pt-28 pb-12 px-4 w-full">
    //       {productList?.map(({ image, title, description, price }, index) => (
    //         <ProductCardComponent 
    //           key={index}
    //           image={image} 
    //           title={title} 
    //           description={description} 
    //           price={price}
    //         />
    //       ))} */}
    {/* //     </div>
    //   </section>

    //   <section>
    //     <FooterComponent/>
    //   </section>

    //   <section>
    //     <ProductSlideListComponent/>
    //   </section> */}
    {/* // </main> */}
    <NavbarComponent/>
    <FooterComponent/>
    <ProductSlideListComponent/>
    <ProductCardList/>

    </>
  )
}

export default App