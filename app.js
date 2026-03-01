App({
  globalData: {
    cart: []
  },

  addToCart(product) {
    const existing = this.globalData.cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.globalData.cart.push({ ...product, quantity: 1, selected: true });
    }
  },

  updateCartItem(productId, updater) {
    this.globalData.cart = this.globalData.cart.map((item) => {
      if (item.id === productId) {
        return updater(item);
      }
      return item;
    });
  },

  removeFromCart(productId) {
    this.globalData.cart = this.globalData.cart.filter((item) => item.id !== productId);
  }
});
