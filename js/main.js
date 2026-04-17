import { header, footer } from './templates/template.js';
import darkMode from './utils/darkMode.js';
import getSkills from './utils/skillList.js';
import menu from './utils/menu.js';
/*import getCheatsheets from './utils/cheatsheetsList.js';*/
import { getResources } from './utils/resourcesGenerator.js';

// Cargar templates de header y footer
const siteHeader = document.querySelector('header');
const siteFooter = document.querySelector('footer');

if (siteHeader && siteHeader.innerHTML.trim() === '') {
  siteHeader.innerHTML = header;
}

if (siteFooter && siteFooter.innerHTML.trim() === '') {
  siteFooter.innerHTML = footer;
}

// Inicializar funcionalidades
darkMode();
menu();
getSkills();