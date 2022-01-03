import './style.css'
import { renderTitle } from './components/title.js';
import { renderNavbar } from './components/navbar';

const content = document.getElementById('content');
content.appendChild(renderTitle());
content.appendChild(renderNavbar());