const products = [
  {
    id: 't001',
    name: '碳纤维网球拍 Pro 300',
    category: 'tennis-racket',
    categoryLabel: '网球拍',
    price: 1299,
    stock: 36,
    cover: '🎾',
    tags: ['轻量', '专业'],
    description: '300g 平衡设计，适合进阶球员，兼顾控制与力量。'
  },
  {
    id: 't002',
    name: '高回弹网球 4 粒装',
    category: 'tennis-ball',
    categoryLabel: '网球',
    price: 69,
    stock: 120,
    cover: '🟢',
    tags: ['耐打', '比赛训练'],
    description: '适配硬地和人工草地，回弹稳定，手感扎实。'
  },
  {
    id: 't003',
    name: '速干网球服套装',
    category: 'tennis-apparel',
    categoryLabel: '网球服饰',
    price: 299,
    stock: 85,
    cover: '👕',
    tags: ['速干', '透气'],
    description: '轻薄速干面料，运动剪裁，适合夏季训练与对抗。'
  },
  {
    id: 'p001',
    name: '皮克球拍 Control X',
    category: 'pickleball-paddle',
    categoryLabel: '皮克球拍',
    price: 499,
    stock: 50,
    cover: '🏓',
    tags: ['控球', '新手友好'],
    description: '蜂窝芯结构，击球稳定，甜区大，适合入门到中阶。'
  },
  {
    id: 'p002',
    name: '室内皮克球 6 只装',
    category: 'pickleball-ball',
    categoryLabel: '皮克球',
    price: 89,
    stock: 96,
    cover: '🟡',
    tags: ['室内', '耐磨'],
    description: '均衡飞行轨迹，噪音低，适合室内球馆长期使用。'
  },
  {
    id: 'p003',
    name: '皮克球便携网架套装',
    category: 'pickleball-net',
    categoryLabel: '皮克球网架',
    price: 799,
    stock: 18,
    cover: '🥅',
    tags: ['可折叠', '便携'],
    description: '快速搭建，轻便收纳，适合社区与学校场景。'
  }
];

const categories = [
  { key: 'all', label: '全部' },
  { key: 'tennis-racket', label: '网球拍' },
  { key: 'tennis-ball', label: '网球' },
  { key: 'tennis-apparel', label: '网球服饰' },
  { key: 'pickleball-paddle', label: '皮克球拍' },
  { key: 'pickleball-ball', label: '皮克球' },
  { key: 'pickleball-net', label: '皮克球网架' }
];

module.exports = {
  products,
  categories
};
