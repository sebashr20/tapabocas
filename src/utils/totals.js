export const totals = (cart) => {
  const totalAmount = cart
    .map((cart) => {
      return cart.price * cart.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  const totalQuantity = cart
    .map((qty) => {
      return qty.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  return { amount: totalAmount, qty: totalQuantity };
};
