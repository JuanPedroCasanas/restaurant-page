import { buttonCreator } from './buttonCreator';
import { renderTitle } from './title';
import { renderMainPage } from './renderMainPage';

export function renderIntroPage() {
  const introPage = document.createElement('div');
  const title = renderTitle();
  const enterButton = buttonCreator('>>>', 'enterButton', () => { renderMainPage() });

  introPage.classList.add('introPage');
  title.classList.add('mainTitle');

  introPage.appendChild(title);
  introPage.appendChild(enterButton);

  return introPage;
}