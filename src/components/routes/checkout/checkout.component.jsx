// React:
import { useContext } from "react";
// Contexts:
import { CartContext } from "../../../contexts/cart.context";
// Constants:
import { PRODUCT_HEADERS } from "../../../utils/constants/constants";
// Styles:
import "./checkout.styles.scss";

const Checkout = () => {
  const { PRODUCT, DESCRIPTION } = PRODUCT_HEADERS;
  const { removeItemToCart, addItemToCart, cartItems } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>{PRODUCT}</span>
        </div>
        <div className="header-block">
          <span>{DESCRIPTION}</span>
        </div>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Product</span>
        </div>
      </div>
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
                    <button onClick={() => removeItemToCart(cartItem)}>
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
    </div>
  );
};
export default Checkout;
