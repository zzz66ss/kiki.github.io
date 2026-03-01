const { products, categories } = require('../../data/products');
const { formatPrice } = require('../../utils/currency');

Page({
  data: {
    categories,
    activeCategory: 'all',
    productList: []
  },

  onLoad() {
    this.refreshList();
  },

  changeCategory(event) {
    const { key } = event.currentTarget.dataset;
    this.setData({ activeCategory: key }, () => this.refreshList());
  },

  refreshList() {
    const { activeCategory } = this.data;
    const filtered = activeCategory === 'all'
      ? products
      : products.filter((item) => item.category === activeCategory);

    const productList = filtered.map((item) => ({
      ...item,
      priceText: formatPrice(item.price)
    }));

    this.setData({ productList });
  },

  goDetail(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/product/product?id=${id}` });
  }
});
