export const initNavbar = (selector) => {
  const elements = Array.from(document.querySelectorAll(selector));
  return elements.map(el => new Navbar(el));
};

class Navbar {
  // Keep the constructor lean, don't add anything more to this.
  constructor(el) {
    this.el = el;
    this.scrollPos = 0;

    this.init();
  }

  async init() {
    this.checkIfPastBanner();
  }

  checkIfPastBanner() {
    const bannerEnd = document.querySelector('.js-banner-end');
    if (bannerEnd) {
      const bannerEndPos = bannerEnd.getBoundingClientRect();
      window.addEventListener('scroll', () => {
        if (window.scrollY >= bannerEndPos.bottom) {
          return this.el.classList.remove('navbar-hidden');
        }

        this.el.classList.add('navbar-hidden');
      });
    }
  }
}
