import './style.css'
import { renderIntroPage } from './components/introPage';
const content = document.getElementById('content');

content.appendChild(renderIntroPage());