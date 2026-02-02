export default class BurgerMenu {
  constructor(config) {
    this.config = config;

    this.burgerButton = document.querySelector(`.${config.BURGER}`);
    this.burgerMenu = document.querySelector(`.${config.HEADER_MENU}`);
    this.body = document.querySelector(`.${config.PAGE_BODY}`);
    this.overlay = document.querySelector(".menu-overlay");

    if (!this.burgerButton || !this.burgerMenu || !this.body || !this.overlay) {
      console.error("BurgerMenu: required elements not found");
      return;
    }

    // 🔥 единый брейкпоинт
    this.isMobileView = window.innerWidth <= config.BREAKPOINT;

    this.onBurgerClick = this.onBurgerClick.bind(this);
    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.onResize = this.onResize.bind(this);

    this.init();
  }

  init() {
    this.onResize(); // ✅ принудительная синхронизация при старте
    window.addEventListener("resize", this.onResize);

    // клики внутри меню не закрывают его
    this.burgerMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  addEvents() {
    this.burgerButton.addEventListener("click", this.onBurgerClick);
    this.overlay.addEventListener("click", this.onOverlayClick);
  }

  removeEvents() {
    this.burgerButton.removeEventListener("click", this.onBurgerClick);
    this.overlay.removeEventListener("click", this.onOverlayClick);
  }

  onResize() {
    const isMobile = window.innerWidth <= this.config.BREAKPOINT;

    if (isMobile !== this.isMobileView) {
      this.isMobileView = isMobile;

      if (isMobile) {
        this.addEvents();
      } else {
        this.closeMenu();
        this.removeEvents();
      }
    }
  }

  onBurgerClick(e) {
    e.stopPropagation();

    const isOpen = this.burgerButton.classList.toggle(this.config.BURGER_OPEN);

    this.burgerMenu.classList.toggle(this.config.HEADER_MENU_OPEN, isOpen);

    this.overlay.classList.toggle("menu-overlay--active", isOpen);
    this.body.classList.toggle(this.config.PAGE_BODY_NO_SCROLL, isOpen);

    this.burgerButton.setAttribute("aria-expanded", String(isOpen));
    this.burgerButton.setAttribute(
      "aria-label",
      isOpen ? this.config.LABEL.CLOSE : this.config.LABEL.OPEN,
    );
  }

  onOverlayClick() {
    this.closeMenu();
  }

  closeMenu() {
    this.burgerButton.classList.remove(this.config.BURGER_OPEN);
    this.burgerMenu.classList.remove(this.config.HEADER_MENU_OPEN);
    this.overlay.classList.remove("menu-overlay--active");
    this.body.classList.remove(this.config.PAGE_BODY_NO_SCROLL);

    this.burgerButton.setAttribute("aria-expanded", "false");
    this.burgerButton.setAttribute("aria-label", this.config.LABEL.OPEN);
  }
}
