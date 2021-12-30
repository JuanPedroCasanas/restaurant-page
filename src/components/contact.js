import { clearPage } from './clearPage';

export function renderContact(){
  clearPage('contact');
  const content = document.getElementById('content');
  const contact = document.createElement('div');
  const map = document.createElement('img');
  const address = document.createElement('p');
  const phone = document.createElement('p');

  map.classList.add('map');
  address.classList.add('address');
  phone.classList.add('phone');
  contact.classList.add('contact');

  map.src = './assets/map.png';
  address.textContent = 'Blanco Crossing';
  phone.textContent = '555-3750';

  contact.appendChild(map);
  contact.appendChild(address);
  contact.appendChild(phone);
  content.appendChild(contact);
}
