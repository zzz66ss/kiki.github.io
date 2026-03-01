const { products } = require('../../data/products');
const { formatPrice } = require('../../utils/currency');

Page({
  data: {
    product: null
  },

  onLoad(query) {
    const { id } = query;
    const product = products.find((item) => item.id === id);

    if (!product) {
      wx.showToast({ title: '商品不存在', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 800);
      return;
    }

    this.setData({
      product: {
        ...product,
        priceText: formatPrice(product.price)
      }
    });
  },

  addToCart() {
    const app = getApp();
    app.addToCart(this.data.product);
    wx.showToast({ title: '已加入购物车', icon: 'success' });
  }
});
