import {createRoute} from './components/route.js';
import {createMenu} from './components/menu.js';
import {createFilters} from './components/filters.js';
import {createSortingCards} from './components/sortingcards.js';
import {createCard} from './components/card.js';

const NUMBER_OF_CREATED_CARDS = 3;

const render = (container, template, place = `afterbegin`) =>
  container.insertAdjacentHTML(place, template);

const routeContainer = document.querySelector(`.trip-main__trip-info`);
const menuContainer = document.querySelector(`.trip-main__trip-controls`);
const mainContainer = document.querySelector(`.trip-events`);

render(routeContainer, createRoute());
render(menuContainer, createMenu());
render(menuContainer, createFilters(), `beforeend`);
render(mainContainer, createSortingCards());

for (let i = 0; i < NUMBER_OF_CREATED_CARDS; i++) {
  render(mainContainer, createCard(), `beforeend`);
}
