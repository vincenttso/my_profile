import Loader from './loader'

export const initBanner = (selector) => {
  const elements = Array.from(document.querySelectorAll(selector));
  return elements.map(el => new BannerLoad(el));
};

class BannerLoad {
  // Keep the constructor lean, don't add anything more to this.
  constructor(el) {
    this.el = el;

    const loadingScreen = document.querySelector('.js-loading-screen');
    this.loadingScreen = new Loader(loadingScreen);

    this.init();
  }

  init() {
    this.checkBannerLoaded();
  }

  checkBannerLoaded() {
    window.addEventListener('load', () => {
      this.loadingScreen.endLoading();
      this.el.classList.add('content-text-show');
    })
  }
}
