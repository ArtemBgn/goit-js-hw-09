import SimpleLightbox from 'simplelightbox';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const liItems = [];
for (let i = 0; i < images.length; i++) {
  const liItem = document.createElement('li');
  const aItem = document.createElement('a');
  const imgItem = document.createElement('img');

  liItem.className += ' gallery-item';
  aItem.className += ' gallery-link';
  imgItem.className += ' gallery-image';

  aItem.href = images[i].original;

  imgItem.src = images[i].preview;
  imgItem.alt = images[i].description;
  imgItem.dataset.source = images[i].original;

  aItem.append(imgItem);
  liItem.append(aItem);
  liItems.push(liItem);
}

const galImg = document.querySelector('ul.gallery');
galImg.append(...liItems);
const myGallery = new SimpleLightbox('.gallery-link', { loop: false });
// const myGallery = new SimpleLightbox('.gallery-image', { loop: false });
/*
galImg.addEventListener('click', event => {
  event.preventDefault();
  //   console.log('🚀 ~ event:', event.target);

  //   if (event.target.nodeName !== 'IMG') {
  //     return 0;
  //   }
  //   basicLightbox
  //     .create(
  //       `
  //       <img src="${event.target.dataset.source}" width="800" height="600">
  //       `
  //     )
  //     .show();
});
*/
