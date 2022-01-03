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
    ('Cheese Pizza', '/assets/cheesePizza.png', 'pizza pizza'));
  menuArray.push(menuItemCreator
    ('Pepperoni Pizza', '/assets/pepperoniPizza.png', 'pizza pizza'));
  menuArray.push(menuItemCreator
    ('Meat & Olives Pizza', '/assets/meatOlivePizza.png', 'pizza pizza'));
  menuArray.push(menuItemCreator
    ('Rocket & tomatoes pizza', '/assets/rocketPizza.png', 'pizza pizza'));

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