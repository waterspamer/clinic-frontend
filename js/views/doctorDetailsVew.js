// js/views/doctorDetailsView.js
import { fetchDoctorDetails } from '../api.js';

export async function renderDoctorDetails(id) {
  const app = document.getElementById('app');
  app.innerHTML = '<div class="loading">Загрузка информации о специалисте...</div>';

  try {
    const doctor = await fetchDoctorDetails(id);
    app.innerHTML = `
      <div class="doctor-details">
        <img src="${doctor.photoUrl}" alt="${doctor.name}">
        <h2>${doctor.name}</h2>
        <p><strong>Специализация:</strong> ${doctor.specialization}</p>
        <p><strong>Стаж:</strong> ${doctor.experience} лет</p>
        <p><strong>О враче:</strong> ${doctor.description}</p>
        <button id="book-appointment" class="btn">Записаться на приём</button>
        <button id="add-favorite" class="btn">Добавить в избранное</button>
        <button onclick="window.history.back()" class="btn">Назад</button>
      </div>
    `;

    document.getElementById('book-appointment').addEventListener('click', () => {
      window.location.hash = `#appointment/${id}`;
    });

    // Обработчики других событий

  } catch (error) {
    app.innerHTML = `<div class="error">${error.message}</div>`;
  }
}
