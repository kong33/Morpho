import aluminumBoxImg from '@/public/images/product/aluminumBox.png';
import manufacturingImg from '@/public/images/product/manufacturingAnodizing.png';
import paintMarkingImg from '@/public/images/product/paintMarking.png';
import wallPanelImg from '@/public/images/product/wallPanel.png';

export const productData = [
  {
    type: 'innerTextFullImage',
    title: 'Wall Panel',
    descriptions: [
      '저희는 사용자가 필요로 하는 거의 모든 인터페이스를 판넬에 디자인, 설치 가공하는 서비스를 제공합니다.'
    ],
    imageUrl: wallPanelImg,
    isHoverAble: false,
    redirectUrl: '',
    className: 'wallPanel'
  },
  {
    type: 'innerTextFullImage',
    title: 'Aluminum Box',
    descriptions: [
      '특화된 알루미늄 프로파일을 사용하여 각각의 면을 컷팅, 삽입, 고정시키는 방식으로 원하는 사이즈의 BOX를 제작 할 수 있습니다.'
    ],
    imageUrl: aluminumBoxImg,
    isHoverAble: false,
    redirectUrl: '',
    className: 'aluminumBox'
  },
  {
    type: 'innerTextFullImage',
    title: 'Manufacturing & Anodizing',
    descriptions: [
      '사용자가 직접 디자인 한 캐드(DXF,DEG) 파일을 가공하여 SILVER, BLACK, GOLD 등 색의 알루미늄 표면처리를(ANODIZING) 합니다.'
    ],
    imageUrl: manufacturingImg,
    isHoverAble: false,
    redirectUrl: '',
    className: 'manuFacturingAnodizing'
  },
  {
    type: 'innerTextFullImage',
    title: 'Paint & Marking',
    descriptions: ['판넬 레터링과 로고 인쇄는 음각조각 후 페인팅, UV 프린팅, 레이저 가공 등으로 제작합니다.'],
    imageUrl: paintMarkingImg,
    isHoverAble: false,
    redirectUrl: '',
    className: 'paintMarking'
  }
];

export const a = '1';
