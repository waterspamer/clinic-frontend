// js/api.js
const API_BASE_URL = 'https://your-backend-api.com/api';

export async function fetchDoctors() {
  const response = await fetch(`${API_BASE_URL}/doctors`);
  if (!response.ok) {
    throw new Error('Ошибка при загрузке списка специалистов');
  }
  return await response.json();
}

export async function fetchDoctorDetails(id) {
  const response = await fetch(`${API_BASE_URL}/doctors/${id}`);
  if (!response.ok) {
    throw new Error('Ошибка при загрузке данных специалиста');
  }
  return await response.json();
}

// Другие функции API
