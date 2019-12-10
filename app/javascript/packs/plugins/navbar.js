export const initNavbar = (selector) => {
  const elements = Array.from(document.querySelectorAll(selector));
  return elements.map(el => new NavbarScroll(el));
};

class NavbarScroll {
  // Keep the constructor lean, don't add anything more to this.
  constructor(el) {
    this.el = el;
    this.navbarToolEls = this.el.querySelectorAll('.js-navbar-tool');
    this.landingBannerEl = document.querySelector('.landing-banner');
    this.imgBannerEl = document.querySelector('.js-img-banner');
    this.activeBar = this.el.querySelector('.js-active-bar');

    this.scrollPos = 0;

    this.init();
  }

  init() {
    this.checkNavbarPastBannerHeight();
    this.activeNavbarTool();
  }

  checkNavbarPastBannerHeight() {
    this.landingBannerEl.addEventListener('scroll', (event) => {
      if (this.imgBannerEl) {
        const imgPos = this.imgBannerEl.getBoundingClientRect();
        console.log(Math.abs(imgPos.top));
        if (Math.abs(imgPos.top) >= imgPos.height) {
          return this.el.classList.add('navbar-dark');
        }

        this.el.classList.remove('navbar-dark');
      }
    });
  }

  activeNavbarTool() {
    this.navbarToolEls.forEach((toolEl) => {
      toolEl.addEventListener('click', (event) => {
        this.navbarToolEls.forEach((toolEl) => {
          toolEl.classList.remove('tool-active');
        });

        event.target.parentElement.classList.add('tool-active');
        event.target.parentElement.appendChild(this.activeBar);
        this.activeBar.style.translateX = event.target.parentElement.offsetLeft;
      })
    });
  }
}
