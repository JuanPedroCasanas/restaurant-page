import { clearPage } from './clearPage';
import { menuItemCreator } from './menuItemCreator';

export function renderMenu() {
  clearPage('menu');
  const content = document.getElementById('content');
  const menu = document.createElement('div');
  const menuTitle = document.createElement('p');
  const menuItems = document.createElement('div');
  const menuArray = [];

  menuArray.push(menuItemCreator
    ('Cheese Pizza', '/assets/cheesePizza.png', 'Lorem ipsum dolor sit amet, consectetur'));
  menuArray.push(menuItemCreator
    ('Pepperoni Pizza', '/assets/pepperoniPizza.png', 'Lorem ipsum dolor sit amet, consectetur'));
  menuArray.push(menuItemCreator
    ('Meat & Olives Pizza', '/assets/meatOlivePizza.png', 'Lorem ipsum dolor sit amet, consectetur'));
  menuArray.push(menuItemCreator
    ('Rocket & tomatoes pizza', '/assets/rocketPizza.png', 'Lorem ipsum dolor sit amet, consectetur'));

  menu.classList.add('menu');
  menu.classList.add('animatedRender');
  menuTitle.classList.add('menuTitle');
  menuItems.classList.add('menuItems');

  menuTitle.textContent = 'Our pizza selection';

  for (let i = menuArray.length - 1; i >= 0; i--) {
    menuItems.appendChild(menuArray[i]);
  }

  menu.appendChild(menuTitle);
  menu.appendChild(menuItems);

  content.appendChild(menu);
}