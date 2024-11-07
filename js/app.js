// js/app.js
import { initializeApp } from './init.js';
import { router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  router();
  window.addEventListener('hashchange', router);
});
