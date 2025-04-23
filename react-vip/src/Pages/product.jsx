import { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";

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
  },
];

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      name: "Sepatu Lama",
      qty: 1,
    },
  ]);

  const handleAddToCart = () => {
    setCart([]);
  };
  // USE EFFECT digunakan untuk menjalankan suatu fungsi dengan mendetek state mana yang ada perubahan
  // lalu state tersebut dimasukan sebagai dependency parameter di akhir hooksnya

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (carts.length > 0) {
      const sum = carts.reduce((total, item) => {
        const product = products.find((product) => product.id === item.id);
        return total + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(carts));
    }
  }, [carts]);

  const totalPriceRef = useRef(null);

  // UseRef
  const cartRef = useRef([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (carts.find((item) => item.id === id)) {
      setCart(
        carts.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...carts, { id, qty: 1 }]);
    }
  };

  useEffect(() => {
    if (carts.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [carts]);

  useEffect(() => {
    getProducts((data) => {
      console.log(data);
    });
  }, []);

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
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <>
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>
                        Rp&nbsp;
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        Rp&nbsp;
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  </>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>Total Price</td>
                <td>
                  Rp &nbsp;
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
