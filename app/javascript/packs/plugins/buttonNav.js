export const initButtonNav = (selector) => {
  const elements = Array.from(document.querySelectorAll(selector));
  return elements.map(el => new ButtonNav(el));
};

class ButtonNav {
  // Keep the constructor lean, don't add anything more to this.
  constructor(el) {
    this.el = el;

    this.init();
  }

  async init() {
    this.checkIfAnimationsCompleted();
    this.scrollWindowToDisplayContent();
  }

  checkIfAnimationsCompleted() {
    const animationTarget = document.querySelector('.js-animation-target');
    if (!animationTarget) {
      return;
    }

    const initButtonNav = () => {
      this.el.classList.remove('btn-nav-hide');
      setTimeout(function() {
        const btnNav = document.querySelector('.js-btn-nav');

        btnNav.classList.add('animation-float');
      }, 1400);
    }

    animationTarget.addEventListener('animationend', () => {
      initButtonNav();
    });
    animationTarget.addEventListener('webkitAnimationEnd', () => {
      initButtonNav();
    });
  }

  scrollWindowToDisplayContent() {
    this.el.addEventListener('click', () => {
      const bannerPos = this.el.parentElement.getBoundingClientRect();
      window.scrollBy(0, bannerPos.bottom);
    });
  }
}
