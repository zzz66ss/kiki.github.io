const { products } = require('../../data/products');
const { formatPrice } = require('../../utils/currency');

Page({
  data: {
    banners: [
      '夏季网球上新｜满 299 减 30',
      '皮克球装备专区｜2 件 95 折',
      '新人专享券｜满 199 减 20'
    ],
    hotProducts: []
  },

  onLoad() {
    const hotProducts = products.slice(0, 4).map((item) => ({
      ...item,
      priceText: formatPrice(item.price)
    }));

    this.setData({ hotProducts });
  },

  goCategory() {
    wx.switchTab({ url: '/pages/category/category' });
  },

  goDetail(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/product/product?id=${id}` });
  }
});
