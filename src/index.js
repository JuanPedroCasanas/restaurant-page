import './style.css'
import { renderTitle } from './components/title.js';
import { renderLogo } from './components/logo.js';
import { renderNavbar } from './components/navbar';

const content = document.getElementById('content');
content.appendChild(renderLogo());
content.appendChild(renderTitle());
content.appendChild(renderNavbar());