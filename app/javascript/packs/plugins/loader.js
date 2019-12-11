export default class Loader {
  constructor(el) {
    this.el = el;
    this.mainContent = document.querySelector('.js-main-content')
  }

  endLoading() {
    this.el.classList.add('d-none');
    this.mainContent.classList.remove('d-none');
  }
}
