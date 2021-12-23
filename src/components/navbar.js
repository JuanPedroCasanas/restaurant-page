import { buttonCreator } from './buttonCreator';
import { renderHome } from './home';
import { renderMenu } from './menu';

export function renderNavbar() {
  const homeBtn = buttonCreator('Home', 'homeBtn', () => { renderHome() });
  const menuBtn = buttonCreator('Menu', 'menuBtn', () => { renderMenu() })
  const contactBtn = buttonCreator('Contact', 'contactBtn', () => { console.log('ss') });
  const aboutUsBtn = buttonCreator('About us', 'aboutUsBtn', () => { console.log('ss') })

  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  navbar.appendChild(homeBtn);
  navbar.appendChild(menuBtn);
  navbar.appendChild(contactBtn);
  navbar.appendChild(aboutUsBtn);
  return navbar;
}