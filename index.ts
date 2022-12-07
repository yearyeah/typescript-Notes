// Import stylesheets
import './style.css';
import baseMain from './base/';
import interfaceMain from './interface/';
import classMain from './class/';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Study Notes</h1>`;

baseMain();
interfaceMain();
classMain();
