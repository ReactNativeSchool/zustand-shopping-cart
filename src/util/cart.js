import create from 'zustand';

const ensureCart = (state, id) => {
  const cart = state.cart;
  if (!cart[id]) {
    cart[id] = { quantity: 0 };
  }

  return cart;
};

export const useCart = create(set => ({
  cart: {},
  increment: id =>
    set(state => {
      const cart = ensureCart(state, id);

      cart[id].quantity += 1;
      return cart;
    }),
  decrement: id =>
    set(state => {
      const cart = ensureCart(state, id);

      cart[id].quantity -= 1;

      if (cart[id].quantity < 0) {
        cart[id].quantity = 0;
      }

      return cart;
    }),
}));
