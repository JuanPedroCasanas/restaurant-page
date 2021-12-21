import { buttonCreator } from './buttonCreator';

const homeBtn = buttonCreator('Home', 'homeBtn', ()=>{console.log('ss')});
const menuBtn = buttonCreator('Menu', 'menuBtn', ()=>{console.log('ss')})
const contactBtn = buttonCreator('Contact', 'contactBtn', ()=>{console.log('ss')});
const aboutUsBtn = buttonCreator('About us', 'aboutUsBtn', ()=>{console.log('ss')})

const navbar = document.createElement('div');
navbar.classList.add('navbar');
navbar.appendChild(homeBtn);
navbar.appendChild(menuBtn);
navbar.appendChild(contactBtn);
navbar.appendChild(aboutUsBtn);
export { navbar };