import { clearPage } from './clearPage';

export function renderAboutUs(){
  clearPage('aboutUs');
  const content = document.getElementById('content');
  const aboutUs = document.createElement('div');
  const aboutUsImg = document.createElement('img');
  const aboutUsTxt = document.createElement('p');

  aboutUs.classList.add('aboutUs');

  aboutUsImg.src = './assets/aboutUs.png';
  aboutUsTxt.textContent = 'We area family centered pizzeria hahahahah i dont know wtf to write';

  aboutUs.appendChild(aboutUsImg);
  aboutUs.appendChild(aboutUsTxt);

  content.appendChild(aboutUs);
}