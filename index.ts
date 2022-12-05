// Import stylesheets
import './style.css';
import baseMain from './base/';
import mainInterface from './interface/';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Study Notes</h1>`;

baseMain();
mainInterface();
