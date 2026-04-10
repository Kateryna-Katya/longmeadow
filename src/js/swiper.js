import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let threeSwiper = null;
let coreSwiper = null;
let playSwiper = null;

const initSwiper = () => {
  if (window.innerWidth < 1440) {

    if (!threeSwiper) {
      threeSwiper = new Swiper('.three-swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 16,

        navigation: {
          nextEl: '.three-next',
          prevEl: '.three-prev',
        },

        pagination: {
          el: '.three-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        },
      });
    }

    if (!coreSwiper) {
      coreSwiper = new Swiper('.core-swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,

        navigation: {
          nextEl: '.core-next',
          prevEl: '.core-prev',
        },

        pagination: {
          el: '.core-pagination',
          clickable: true,
        },
      });
    }

    if (!playSwiper) {
      playSwiper = new Swiper('.play-swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,

        navigation: {
          nextEl: '.play-next',
          prevEl: '.play-prev',
        },

        pagination: {
          el: '.play-pagination',
          clickable: true,
        },
      });
    }

  } else {
    destroySwiper();
  }
};

const destroySwiper = () => {
  if (threeSwiper) {
    threeSwiper.destroy(true, true);
    threeSwiper = null;
  }

  if (coreSwiper) {
    coreSwiper.destroy(true, true);
    coreSwiper = null;
  }

  if (playSwiper) {
    playSwiper.destroy(true, true);
    playSwiper = null;
  }
};

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);