// js/views/appointmentView.js
import { fetchDoctorDetails } from '../api.js';
import { appointmentForm } from '../components/appointmentForm.js';

export async function renderAppointmentView(doctorId) {
  const app = document.getElementById('app');
  app.innerHTML = '<div class="loading">Загрузка формы записи...</div>';

  try {
    const doctor = await fetchDoctorDetails(doctorId);
    app.innerHTML = `
      <div class="appointment-view">
        <h2>Запись на приём к ${doctor.name}</h2>
        ${appointmentForm(doctor)}
      </div>
    `;

    // Обработчики формы записи

  } catch (error) {
    app.innerHTML = `<div class="error">${error.message}</div>`;
  }
}
