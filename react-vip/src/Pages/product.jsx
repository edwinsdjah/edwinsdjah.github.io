import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    image: "/images/shoes-1.jpg",
    price: "Rp 1.000.000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit recusandae quo cupiditate sit voluptatem eveniet exercitationem quis. Iure rem, vero hic eveniet sed non, magni numquam accusantium consequuntur architecto inventore.",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    image: "/images/shoes-1.jpg",
    price: "Rp 500.000",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit recusandae quo cupiditate sit voluptatem eveniet exercitationem quis.",
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product, index) => (
        <CardProduct key={index}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
