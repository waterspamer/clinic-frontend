// js/api.js

const API_BASE_URL = 'https://your-backend-api.com/api';

export async function sendVerificationCode(phoneNumber) {
  const response = await fetch(`${API_BASE_URL}/auth/request-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phone_number: phoneNumber })
  });

  if (!response.ok) {
    throw new Error('Ошибка при отправке СМС-кода');
  }

  return await response.json();
}

export async function verifyCode(phoneNumber, code) {
  const response = await fetch(`${API_BASE_URL}/auth/verify-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phone_number: phoneNumber, code: code })
  });

  if (!response.ok) {
    throw new Error('Неверный СМС-код');
  }

  const data = await response.json();
  return data.user; // Предполагается, что API возвращает объект пользователя
}

// Существующие функции API
