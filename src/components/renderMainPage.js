import { renderTitle } from './title';
import { renderNavbar } from './navbar';

export function renderMainPage() {
  const content = document.getElementById('content');
  const introPage = document.getElementsByClassName('introPage')[0];
  const navbar = renderNavbar();
  const title = renderTitle();
  content.style.opacity = '0';
  setTimeout(() => {
    content.removeChild(introPage);
    content.appendChild(title);
    content.appendChild(navbar);
    content.style.opacity = '1';
  }, 1000);
}