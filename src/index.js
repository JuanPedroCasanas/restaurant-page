import './style.css'
import { title } from './components/title.js';
import { logo } from './components/logo.js';
import { navbar } from './components/navbar';

const content = document.getElementById('content');
content.appendChild(logo);
content.appendChild(title);
content.appendChild(navbar);