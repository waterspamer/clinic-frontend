// js/views/doctorListView.js
import { fetchDoctors } from '../api.js';
import { doctorCard } from '../components/doctorCard.js';

export async function renderDoctorList() {
  const app = document.getElementById('app');
  app.innerHTML = '<div class="loading">Загрузка специалистов...</div>';

  try {
    const doctors = await fetchDoctors();
    const cards = doctors.map(doctor => doctorCard(doctor)).join('');
    app.innerHTML = `
      <div class="doctor-list">
        <h2>Наши специалисты</h2>
        <div class="cards">
          ${cards}
        </div>
      </div>
    `;
  } catch (error) {
    app.innerHTML = `<div class="error">${error.message}</div>`;
  }
}
