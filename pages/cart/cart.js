const { formatPrice } = require('../../utils/currency');

Page({
  data: {
    cart: [],
    totalText: formatPrice(0)
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    const app = getApp();
    const cart = app.globalData.cart.map((item) => ({
      ...item,
      subtotalText: formatPrice(item.price * item.quantity),
      priceText: formatPrice(item.price)
    }));

    const total = cart
      .filter((item) => item.selected)
      .reduce((sum, item) => sum + item.price * item.quantity, 0);

    this.setData({
      cart,
      totalText: formatPrice(total)
    });
  },

  toggleSelect(event) {
    const { id } = event.currentTarget.dataset;
    const app = getApp();
    app.updateCartItem(id, (item) => ({ ...item, selected: !item.selected }));
    this.refresh();
  },

  changeQty(event) {
    const { id, delta } = event.currentTarget.dataset;
    const app = getApp();
    app.updateCartItem(id, (item) => ({
      ...item,
      quantity: Math.max(1, item.quantity + Number(delta))
    }));
    this.refresh();
  },

  removeItem(event) {
    const { id } = event.currentTarget.dataset;
    const app = getApp();
    app.removeFromCart(id);
    this.refresh();
  },

  checkout() {
    wx.showToast({ title: '演示版：结算功能待接入', icon: 'none' });
  }
});
