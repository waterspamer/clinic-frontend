// js/router.js
import { renderMainMenu } from './views/mainMenuView.js';
import { renderDoctorList } from './views/doctorListView.js';
import { renderDoctorDetails } from './views/doctorDetailsView.js';
// Импорт других представлений

export function router() {
  const hash = window.location.hash || '#menu';

  if (hash === '#menu') {
    renderMainMenu();
  } else if (hash === '#doctors') {
    renderDoctorList();
  } else if (hash.startsWith('#doctor/')) {
    const id = hash.split('/')[1];
    renderDoctorDetails(id);
  } else if (hash === '#profile') {
    // Вызов функции отображения профиля
  }
  // Обработка других маршрутов
  else {
    // Если маршрут не найден, вернуть на главное меню или показать 404
    renderMainMenu();
  }
}
