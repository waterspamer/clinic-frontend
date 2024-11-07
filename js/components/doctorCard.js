// js/components/doctorCard.js
export function doctorCard(doctor) {
    return `
      <div class="doctor-card">
        <img src="${doctor.photoUrl}" alt="${doctor.name}">
        <h3>${doctor.name}</h3>
        <p>${doctor.specialization}</p>
        <a href="#doctor/${doctor.id}" class="btn">Подробнее</a>
      </div>
    `;
  }
  