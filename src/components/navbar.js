import { buttonCreator } from './buttonCreator';
import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderContact } from './contact';
import { renderAboutUs } from './aboutUs';

export function renderNavbar() {
  const homeBtn = buttonCreator('Home', 'homeBtn', () => { renderHome() });
  const menuBtn = buttonCreator('Menu', 'menuBtn', () => { renderMenu() })
  const contactBtn = buttonCreator('Contact', 'contactBtn', () => { renderContact() });
  const aboutUsBtn = buttonCreator('About us', 'aboutUsBtn', () => { renderAboutUs() })

  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  navbar.appendChild(homeBtn);
  navbar.appendChild(menuBtn);
  navbar.appendChild(contactBtn);
  navbar.appendChild(aboutUsBtn);
  return navbar;
}