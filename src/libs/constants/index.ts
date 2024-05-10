export const CATEGORY_MENU = [
  {
    name: '제품',
    subMenus: [
      'Wall Panel | 벽부 판넬',
      'Aluminum box | 알루미늄 박스',
      'Manufacturing & Anodizing | 제조, 처리',
      'Paint & Marking | 도색, 마킹'
    ],
    path: 'product'
  },
  { name: '참고 디자인', subMenus: ['Inspiration | 참고 디자인'], path: 'inspiration' },
  { name: '가격 & 서비스', subMenus: ['Price | 가격', 'Shipping | 배송'], path: 'price&shipping' },
  { name: '문의하기', subMenus: ['Q&A', 'How to connect us | 문의'], path: 'Q&A' }
];

export const productData = [
  { title: 'Wall Panel', description: '' },
  { title: 'Aluminum Box', description: '' },
  {
    title: 'Manufacturing & Anodizing',
    description: ''
  },

  { title: 'Paint & Marking', description: '' }
];

export const productAccordionBackgroundColor = ['#f6f1f1', '#afd3e2', '#19a7ce', '#146c94'];
