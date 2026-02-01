import BurgerMenu from "./burger.js";

const burger = new BurgerMenu({
  BURGER: "header__burger-button",
  BURGER_OPEN: "header__burger-button--open",
  HEADER_MENU: "header__menu",
  HEADER_MENU_OPEN: "header__menu--open",
  PAGE_BODY: "page__body",
  PAGE_BODY_NO_SCROLL: "no-scroll",
  MENU_LINK: "menu__link",
  BREAKPOINT: 1024,
  lABEL: {
    OPEN: "Открыть меню",
    CLOSE: "Закрыть меню",
  },
});
