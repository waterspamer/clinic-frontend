// js/app.js

import { initializeApp } from './init.js';
import { router } from './router.js';
import { renderAuthView } from './views/authView.js';
import { state } from './state.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();

  // Проверяем, авторизован ли пользователь
  if (state.currentUser) {
    router();
  } else {
    renderAuthView();
  }

  window.addEventListener('hashchange', () => {
    if (state.currentUser) {
      router();
    } else {
      renderAuthView();
    }
  });
});
