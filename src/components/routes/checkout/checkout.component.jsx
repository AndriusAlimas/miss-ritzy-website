import { useContext } from "react";

import { CartContext } from "../../../contexts/cart.context";
import "./checkout.styles.scss";
const Checkout = () => {
  const { addItemToCart, cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout Page</h1>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => {
            const { imageUrl, name, quantity, price, id } = cartItem;
            return (
              <tr key={id}>
                <td>
                  <img src={imageUrl} />
                </td>
                <td>
                  <h2>{name}</h2>
                </td>
                <td>
                  <div>
                    <button onClick={() => addItemToCart(cartItem, true)}>
                      &lt;
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => addItemToCart(cartItem)}>
                      &gt;
                    </button>
                  </div>
                </td>

                <td>
                  <span>{price} £</span>
                </td>
                <td>
                  <button>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <p>{message}</p>  */}
    </div>
  );
};
export default Checkout;
