import CardProduct from "../components/Fragments/CardProduct";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    image: "/images/shoes-1.jpg",
    price: 1000000,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit recusandae quo cupiditate sit voluptatem eveniet exercitationem quis. Iure rem, vero hic eveniet sed non, magni numquam accusantium consequuntur architecto inventore.",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    image: "/images/shoes-1.jpg",
    price: 500000,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit recusandae quo cupiditate sit voluptatem eveniet exercitationem quis.",
  },
  {
    id: 3,
    title: "Sepatu Tumben",
    image: "/images/shoes-1.jpg",
    price: 800000,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit recusandae quo cupiditate sit voluptatem eveniet exercitationem quis.",
  }
];

const ProductPage = () => {

const [cart,setCart] = useState([{
  name: "Sepatu Baru",
  qty: 1
}]);

const handleAddToCart = (productName) => {
  setCart([
    ...cart,
    {
      name: productName,
      qty: 1
    }
  ])
}




  return (
    <>
    <div className="flex justify-center py-5">
      <div className="w-3/4 flex flex-wrap">
        {products.map((product) => (
          <CardProduct key={[[product.id]]}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} handleAddToCart={handleAddToCart}/>
          </CardProduct>
        ))}
      </div>
      <div className="w-1/4">
        <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
        <ul>
          {
            cart.map((item)=> (
              <li key ={item.name}>{item.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
    </>
  );
};

export default ProductPage;
