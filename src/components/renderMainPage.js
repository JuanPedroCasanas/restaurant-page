import { renderTitle } from './title';
import { renderNavbar } from './navbar';
import { renderGithubLogo } from './renderGithubLogo';

export function renderMainPage() {
  const content = document.getElementById('content');
  const introPage = document.getElementsByClassName('introPage')[0];
  const navbar = renderNavbar();
  const title = renderTitle();
  const ghLogo = renderGithubLogo();
  content.style.opacity = '0';
  setTimeout(() => {
    content.removeChild(introPage);
    content.appendChild(title);
    content.appendChild(navbar);
    content.appendChild(ghLogo);
    content.style.opacity = '1';
  }, 1000);
}