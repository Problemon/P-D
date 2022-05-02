import {ItcSimpleSlider} from "./simple-adaptive-slider.min.js"

document.addEventListener('DOMContentLoaded', () => {
  // инициализация 1 слайдера с нужными настройками
  new ItcSimpleSlider('.itcss', {
    loop: true,
    autoplay: true,
    interval: 5000,
    swipe: true,
  });
});
