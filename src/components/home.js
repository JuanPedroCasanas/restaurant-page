import { clearPage } from './clearPage';

export function renderHome() {
  clearPage('home');
  const content = document.getElementById('content');
  const home = document.createElement('div');
  const homeTitle = document.createElement('p');
  const homeFig = document.createElement('figure');
  const homeImg = document.createElement('img');
  const homeImgCaption = document.createElement('figcaption');

  home.classList.add('home');
  home.classList.add('animatedRender');
  homeTitle.classList.add('homeTitle');
  homeFig.classList.add('homeFig');
  homeImg.classList.add('homeImg');
  homeImgCaption.classList.add('homeImgCaption');

  homeTitle.textContent = 'The best pizzas in town, since 1973';
  homeImg.src = '/assets/homeImg.jpg';
  homeImgCaption.innerHTML = 'Lorem ipsum dolor sit amet, consectetur' +
    'adipiscing elit. Quisque dignissim est vel diam efficitur porttitor. Curabitur' +
    'congue in quam a rhoncus. Mauris gravida sit amet ex ut scelerisque.' +
    'Donec aliquam leo et gravida ullamcorper. Donec ut sapien magna. Proin' +
    'imperdiet nulla massa, ac sodales nulla tempus quis. Nunc sed sem nulla.' +
    '<br> <br>' +
    'Etiam tincidunt dolor nec scelerisque consequat. Vivamus lobortis' +
    'ullamcorper leo, sit amet blandit leo dapibus ac. Donec mattis neque' +
    'vitae fringilla laoreet. Nunc non sagittis justo. Ut id leo consequat,' +
    'pharetra erat non, vehicula enim. Donec tempor sem in tellus ornare rutrum.' +
    'Pellentesque id eros eu risus ullamcorper tincidunt. Nullam massa dolor,' +
    'aliquam vel vulputate at, varius auctor quam. ';

  homeFig.appendChild(homeImg);
  homeFig.appendChild(homeImgCaption);
  home.appendChild(homeTitle);
  home.appendChild(homeFig);
  
  content.appendChild(home);
}