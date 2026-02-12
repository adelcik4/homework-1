import BurgerMenu from "./burger.js";

new BurgerMenu({
  BURGER: "header__burger-button",
  BURGER_OPEN: "header__burger-button--open",

  HEADER_MENU: "header__menu",
  HEADER_MENU_OPEN: "header__menu--open",

  PAGE_BODY: "page__body",
  PAGE_BODY_NO_SCROLL: "no-scroll",

  BREAKPOINT: 1255,

  LABEL: {
    OPEN: "Открыть меню",
    CLOSE: "Закрыть меню",
  },
});
