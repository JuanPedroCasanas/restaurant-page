import { clearPage } from './clearPage';

export function renderAboutUs(){
  clearPage('aboutUs');
  const content = document.getElementById('content');
  const aboutUs = document.createElement('div');
  const aboutUsImg = document.createElement('img');
  const aboutUsTxt = document.createElement('p');

  aboutUs.classList.add('aboutUs');
  aboutUs.classList.add('animatedRender');
  aboutUsImg.classList.add('aboutUsImg');
  aboutUsTxt.classList.add('aboutUsTxt')

  aboutUsImg.src = './assets/aboutUs.png';
  aboutUsTxt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur' +
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

  aboutUs.appendChild(aboutUsImg);
  aboutUs.appendChild(aboutUsTxt);

  content.appendChild(aboutUs);
}