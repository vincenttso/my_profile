export const initNavbar = (selector) => {
  const elements = Array.from(document.querySelectorAll(selector));
  return elements.map(el => new NavbarScroll(el));
};

class NavbarScroll {
  // Keep the constructor lean, don't add anything more to this.
  constructor(el) {
    this.el = el;
    this.landingBanner = document.querySelector('.landing-banner')
    this.imgBanner = document.querySelector('.js-img-banner');

    this.scrollPos = 0;

    this.init();
  }

  init() {
    this.checkNavbarPastBannerHeight();
    this.checkNavbarScrollUp();
  }

  checkNavbarPastBannerHeight() {
    this.landingBanner.addEventListener('scroll', (event) => {
      if (this.imgBanner) {
        const imgPos = this.imgBanner.getBoundingClientRect();
        if (Math.abs(imgPos.top) >= imgPos.height) {
          return this.el.classList.add('navbar-dark');
        }

        this.el.classList.remove('navbar-dark');
      }
    });
  }

  checkNavbarScrollUp() {
    this.landingBanner.addEventListener('scroll', (event) => {
      if (this.imgBanner) {
        const imgPos = this.imgBanner.getBoundingClientRect();
        if (Math.abs(imgPos.top) >= imgPos.height) {
          if (Math.abs(imgPos.top) <= this.scrollPos) {
            this.el.classList.add('navbar-up');
          }
          else {
            this.el.classList.remove('navbar-up');
          }

          this.scrollPos = Math.abs(imgPos.top);
        }
        else {
          this.el.classList.remove('navbar-up');
        }
      }
    });
  }
}
