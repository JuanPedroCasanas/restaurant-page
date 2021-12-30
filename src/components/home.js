import { clearPage } from './clearPage';

export function renderHome(){
  clearPage('home');
  const content = document.getElementById('content');
  const home = document.createElement('div');
  const homeTitle = document.createElement('p');
  const homeFig = document.createElement('figure'); 
  const homeImg = document.createElement('img');
  const homeImgCaption = document.createElement('figcaption');

  home.classList.add('home');
  homeTitle.classList.add('homeTitle')
  homeFig.classList.add('homeFig')
  homeImg.classList.add('homeImg')
  homeImgCaption.classList.add('homeImgCaption')

  homeTitle.textContent = 'Best pizzeria ever';
  homeImg.src = '/assets/homeImg.jpg';
  homeImgCaption.textContent = 'Our chefs';

  homeFig.appendChild(homeImg);
  homeFig.appendChild(homeImgCaption);

  home.appendChild(homeTitle);
  home.appendChild(homeFig);
  content.appendChild(home);
}