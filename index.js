// Data
// 유기동물
const shelterAnimal = [
  {
    href: 'https://dmanimal.co.kr/adoption',
    image: 'https://cdn.imweb.me/thumbnail/20201125/80898b43122fb.png',
    title: '도그마루 보호소',
  },
  {
    href: 'http://www.saac.kr/?act=board&bbs_code=sub2_1',
    image: 'assets/images/logo.jpg',
    title: '서울 유기동물 입양센터',
  },
  {
    href: 'https://www.ekara.org/kams/adopt',
    image: 'https://www.ekara.org/front/img/kara.svg',
    title: '동물권행동 카라',
  },
  {
    href: 'https://www.animals.or.kr/center/adopt',
    image: 'https://www.animals.or.kr/front/img/kawa-logo.jpg?v=20191102',
    title: '동물자유연대',
  },
  {
    href: 'https://www.daejeon.go.kr/ani/AniStrayAnimalList.do?menuSeq=3108',
    image: 'https://www.daejeon.go.kr/images/ani/common/logo.gif',
    title: '동물보호센터 (대전광역시)',
  },
];
// 반려견 입양
const dogs = [
  {
    href: 'https://blog.naver.com/pinkpega77',
    image: 'assets/images/blog.png',
    title: '타라 아프간하운드 (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/jdogs',
    image: 'assets/images/blog.png',
    title: '비숑, 함께여서 즐거운... (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/yjm0203',
    image: 'assets/images/blog.png',
    title: '쥬쥬폼 (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/jjooooooooon',
    image: 'assets/images/blog.png',
    title: '카사노바에리켄넬 (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/hvk3123',
    image: 'assets/images/blog.png',
    title: '히든밸리켄넬 (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/gogolang',
    image: 'assets/images/blog.png',
    title: '제이드스타 셀티*셔틀랜드쉽독 (네이버 블로그)',
  },
  {
    href: 'http://www.best-dachshund.com',
    image: 'assets/images/dog01.png',
    title: '닥스훈트 베르네집',
  },
  {
    href: 'http://www.monamik9.com',
    image: 'http://www.monamik9.com/data/file/logo.gif',
    title: '모나미애견훈련소',
  },
  {
    href: 'https://cafe.naver.com/d0g',
    image: 'assets/images/naver.png',
    title: '토토페키니즈',
  },
  {
    href: 'https://blog.naver.com/shibainuha_chi',
    image: 'assets/images/blog.png',
    title: '가도켄넬(시바견)',
  },
  {
    href: 'https://www.instagram.com/pomekennel/',
    image:
      'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png',
    title: '포메켄넬',
  },
  {
    href: 'https://blog.naver.com/bearbox',
    image:
      'https://blogpfthumb-phinf.pstatic.net/20160525_108/bearbox_1464162450381mSO6y_JPEG/IMG_2835-2.jpg?type=w161',
    title: '로베르토',
  },
  {
    href: 'https://blog.naver.com/qkrducjs',
    image: 'assets/images/blog.png',
    title: '알곡켄넬',
  },
  {
    href: 'https://blog.naver.com/coldbay',
    image: 'assets/images/blog.png',
    title: '콜드베이',
  },
  {
    href: 'https://www.instagram.com/champion.kennel/',
    image:
      'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png',
    title: '챔피언켄넬',
  },
  // {
  //   href: '',
  //   image: '',
  //   title: '',
  // },
];
// 빈려묘 입양
const cats = [
  {
    href:
      'https://blog.naver.com/PostList.nhn?blogId=catopia9&from=postList&categoryNo=8',
    image: 'assets/images/blog.png',
    title: '캣토피아 (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/ejejs7894',
    image: 'assets/images/blog.png',
    title: '엔젤돌스 (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/ragdoll___',
    image: 'assets/images/blog.png',
    title: '랙돌캐터리 (네이버 블로그)',
  },
  {
    href:
      'https://blog.naver.com/PostList.nhn?blogId=go4nam&from=postList&categoryNo=17',
    image: 'assets/images/cat01.png',
    title: '묘한인생 (네이버 블로그) - 성남시 분당구',
  },
  {
    href: 'https://blog.naver.com/kokata100',
    image: 'assets/images/blog.png',
    title: '나무타는 고양이와 구경하는 강아지',
  },
  {
    href: 'https://blog.naver.com/myohancattery',
    image: 'assets/images/blog.png',
    title: '묘한캐터리 (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/pixiewings',
    image: 'assets/images/blog.png',
    title: '픽시윙스 데본렉스캐터리 (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/dalbodre',
    image: 'assets/images/blog.png',
    title: '스코티시폴드 캐터리 달보드레 (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/fnfnfjfj',
    image: 'assets/images/blog.png',
    title: '아메리칸 숏헤어 캐터리 (네이버 블로그)',
  },
  {
    href: 'https://blog.naver.com/abyqueen',
    image:
      'https://blogpfthumb-phinf.pstatic.net/20131118_111/abyqueen_1384747823305x80jc_JPEG/EDSC03093s-2.jpg?type=w161',
    title: '아비퀸',
  },
  {
    href: 'https://blog.naver.com/pama2003',
    image: 'assets/images/blog.png',
    title: '달래캐터리',
  },
  {
    href: 'https://www.elrohicat.com',
    image:
      'https://static.wixstatic.com/media/fae27a_bf6778ee36f0449886dd3c74cf1ffaae~mv2.png/v1/fill/w_600,h_357,al_c,q_85,usm_0.66_1.00_0.01/%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A9%E1%84%8B%E1%85%B5_%E1%84%87%E1%85%A1%E1%86%A8%E1%84%8E%E1%85%A9%E1%84%85%E1%85%A9%E1%86%BC%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9%E1%86%AB_wh%E1%84%8B%E1%85%A6%E1%86%A8%E1%84%8C%E1%85%AD%E1%84%90%E1%85%B5%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%AE.webp',
    title: '엘로하이',
  },
  {
    href: 'https://blog.naver.com/miki9950',
    image: 'assets/images/blog.png',
    title: '그린토파즈',
  },
  {
    href: 'https://blog.naver.com/neverland_cat',
    image: 'assets/images/blog.png',
    title: '네버랜드 캣',
  },
  {
    href: 'https://blog.naver.com/spariver',
    image: 'assets/images/blog.png',
    title: '스파리버',
  },
  {
    href: 'https://blog.naver.com/nhyas2',
    image: 'assets/images/blog.png',
    title: '포래그',
  },
  {
    href: 'https://blog.naver.com/suwonck',
    image: 'assets/images/blog.png',
    title: '글라우브',
  },
  {
    href: 'https://blog.naver.com/appledolls',
    image: 'assets/images/blog.png',
    title: '애플돌스',
  },
  {
    href: 'https://blog.naver.com/great_delight',
    image: 'assets/images/blog.png',
    title: '그래댈',
  },
  {
    href: 'https://blog.naver.com/vavidolls',
    image: 'assets/images/blog.png',
    title: '바비돌',
  },
  {
    href: 'https://blog.naver.com/mondscheinrb',
    image: 'assets/images/blog.png',
    title: '달빛',
  },
  {
    href: 'https://blog.naver.com/kjhkuri',
    image: 'assets/images/blog.png',
    title: '소말리',
  },
  // {
  //   href: '',
  //   image: '',
  //   title: '',
  // },
];
// 반려조 입양
const birds = [
  {
    href: 'https://blog.naver.com/dnmparrotsfarm',
    image: 'assets/images/blog.png',
    title: 'D&M Parrots farm (네이버 블로그)',
  },
  {
    href: 'https://newrunrepcity.com/category/ㆀ-앵무새-분양/45/',
    image:
      'https://newrunrepcity.com/web/upload/category/logo/34c830fea46151d4fe120a98d7d8f884_40_top.jpg',
    title: '뉴런렙시티 & 버드플라이',
  },
  {
    href: 'http://edpark.co.kr/',
    image: 'http://edpark.co.kr/morenvyimg/top_logo.gif',
    title: '에덴파크',
  },
  {
    href: 'http://www.birdzoo.org/main.html',
    image: 'assets/images/bird01.png',
    title: '앵무새동물원',
  },
  {
    href: 'http://www.agase.co.kr/',
    image: 'http://refax.img7.kr/page/images/tlogo.png',
    title: '아가새농장',
  },
  {
    href: 'https://blog.naver.com/PostList.nhn?blogId=badara8282',
    image: 'assets/images/blog.png',
    title: '충남.내포.앵무새농장 (네이버 블로그)',
  },
  {
    href: 'http://ksh7.co.kr/index.html',
    image:
      'http://ksh7.co.kr/web/upload/category/logo/1f116899b5d3356bc0ad7468ad910e49_3_top.jpg',
    title: '버드모아',
  },
  {
    href: 'https://cafe.naver.com/birdskool',
    image: 'assets/images/naver.png',
    title: '버드스쿨 (네이버 카페)',
  },
  {
    href: 'https://blog.naver.com/anziman',
    image: 'assets/images/blog.png',
    title: '대구앵무새농장',
  },
  {
    href: 'https://blog.naver.com/gozip14',
    image:
      'https://blogpfthumb-phinf.pstatic.net/MjAxODEyMTlfMjU3/MDAxNTQ1MjA5ODgyMjQz._OmgOTnOfaWLCcQPTDWfOtDXL98jm2uwo5tfTz3ax5og.vXTh3mAzJ4y9rJoLRaawa4dO0XCTDX4c89xeLK2N2s4g.PNG.gozip14/%25C7%25C1%25B7%25CE%25C7%25CA.png?type=w161',
    title: '앵무새 숲',
  },
  {
    href: 'https://blog.naver.com/cabellan',
    image: 'assets/images/blog.png',
    title: '상주앵무새농장',
  },
];
// 양서 파충류 입양
const reptiles = [
  {
    href: 'https://www.zools.co.kr',
    image:
      'https://app-storage-edge-004.cafe24.com/bannermanage2/ehddud3/2019/07/02/6344c468666bb5f1994a16323acd64d9.png',
    title: '줄스',
  },
  {
    href: 'http://www.jungle-pet.co.kr/shop/main/index.php',
    image: 'assets/images/jungle_pet.jpg',
    title: '정글펫',
  },
  {
    href: 'https://더쥬.com',
    image:
      'https://더쥬.com/web/upload/category/logo/00c4d87bfb16fa18181a100943d8d85f_uQL3jIDLCp_7_top.jpg',
    title: '더 주',
  },
  {
    href: 'https://www.koopet.co.kr',
    image: 'https://www.koopet.co.kr/shop/img/logo.png',
    title: '쿠펫 온라인',
  },
  {
    href: 'http://www.dartfrog.co.kr',
    image:
      'http://app-storage-edge-008.cafe24.com/bannermanage2/fkzlzl2/2018/07/15/39783865d3e5d5ae4261f1840000b551.png',
    title: '다트샵',
  },
  {
    href: 'https://geckostory.com',
    image:
      'https://app-storage-edge-002.cafe24.com/bannermanage2/geckostory/2019/03/08/7dc239ca546da405acb352b858ffc26c.jpg',
    title: '게코스토리',
  },
  {
    href: 'http://geckoholic.co.kr',
    image:
      'http://geckoholic.co.kr/web/upload/category/logo/7b215c4d87083961e948c7b2eaa71c2a_28_top.jpg',
    title: '게코 홀릭',
  },
  {
    href: 'http://newrunreptile.co.kr',
    image:
      'http://newrunreptile.co.kr/web/upload/category/logo/c47cffe99b5ca4afe162e7fc1d72acc4_IudXdJeiUW_1_top.jpg',
    title: '뉴런렙타일',
  },
  {
    href: 'http://bighornmania.cafe24.com',
    image:
      'http://bighornmania.cafe24.com/web/upload/favicon_20200302190413.ico',
    title: '빅혼',
  },
  {
    href: 'https://www.vanmori.com',
    image:
      'https://contents.sixshop.com/uploadedFiles/32210/default/image_1510465762163.jpg',
    title: '반모리',
  },
];

// DOM
const shelterAnimalList = document.querySelector('.shelter-animal');
const dogsList = document.querySelector('.dogs');
const catsList = document.querySelector('.cats');
const birdsList = document.querySelector('.birds');
const reptilesList = document.querySelector('.reptiles');

const init = () => {
  // 유기동물
  listLoop(shelterAnimal, shelterAnimalList);
  // 반려견
  listLoop(dogs, dogsList);
  // 반려묘
  listLoop(cats, catsList);
  // 반려조
  listLoop(birds, birdsList);
  // 반려파충류
  listLoop(reptiles, reptilesList);
};

/**
 * list배열로 사이트 리스트 만들어줌
 * @param {Array} list
 * @param {HTMLUListElement} listDOM
 */
const listLoop = (list, listDOM) => {
  const className =
    list === shelterAnimal
      ? 'shelter-animal'
      : list === dogs
      ? 'dogs'
      : list === cats
      ? 'cats'
      : list === birds
      ? 'birds'
      : 'reptiles';

  list.forEach((site, index) => {
    const li = document.createElement('li');
    li.className = className;

    const a = document.createElement('a');
    a.href = site.href;
    a.target = '_blank';
    a.className = className;

    const img = document.createElement('img');
    img.src = site.image;
    img.alt = site.title;
    img.className = className;

    const div = document.createElement('div');
    div.innerText = site.title;
    div.className = className;

    a.append(img, div);
    li.append(a);
    li.className = className;

    li.addEventListener('click', sendGA);

    listDOM.append(li);
  });
};

const sendGA = (event) => {
  const eventLabel =
    event.target.className === 'shelter-animal'
      ? '유기동물 입양'
      : event.target.className === 'dogs'
      ? '반려견 분양'
      : event.target.className === 'cats'
      ? '반려묘 분양'
      : event.target.className === 'birds'
      ? '반려조 분양'
      : '반려파충류/양서류 분양';

  console.log('call ga');
  gtag('event', '분양 사이트 방문', {
    event_category: '카테고리별 분양 사이트 방문',
    event_label: eventLabel,
  });
};

init();
