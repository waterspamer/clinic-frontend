// js/views/authView.js

import { state } from '../state.js';
import { sendVerificationCode, verifyCode } from '../api.js';
import { renderMainMenu } from './mainMenuView.js';

export function renderAuthView() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="auth-view">
      <h2>Авторизация</h2>
      <form id="phone-form">
        <label for="phone">Номер телефона:</label>
        <input type="tel" id="phone" name="phone" placeholder="+7 (___) ___-__-__" required>
        <button type="submit" class="btn">Получить СМС-код</button>
      </form>
      <form id="code-form" style="display: none;">
        <label for="code">СМС-код:</label>
        <input type="text" id="code" name="code" placeholder="Введите код из СМС" required>
        <button type="submit" class="btn">Подтвердить</button>
        <button id="resend-code" class="btn-link">Отправить код повторно</button>
      </form>
      <div id="auth-message"></div>
    </div>
  `;

  const phoneForm = document.getElementById('phone-form');
  const codeForm = document.getElementById('code-form');
  const authMessage = document.getElementById('auth-message');

  phoneForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const phoneInput = document.getElementById('phone');
    const phoneNumber = phoneInput.value.trim();

    try {
      await sendVerificationCode(phoneNumber);
      state.phoneNumber = phoneNumber;
      phoneForm.style.display = 'none';
      codeForm.style.display = 'block';
      authMessage.textContent = 'Код отправлен на ваш номер телефона.';
    } catch (error) {
      authMessage.textContent = error.message;
    }
  });

  codeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const codeInput = document.getElementById('code');
    const code = codeInput.value.trim();

    try {
      const userData = await verifyCode(state.phoneNumber, code);
      state.currentUser = userData;
      window.location.hash = '#menu'; // Перенаправление в главное меню
    } catch (error) {
      authMessage.textContent = error.message;
    }
  });

  const resendCodeButton = document.getElementById('resend-code');
  resendCodeButton.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
      await sendVerificationCode(state.phoneNumber);
      authMessage.textContent = 'Код повторно отправлен на ваш номер телефона.';
    } catch (error) {
      authMessage.textContent = error.message;
    }
  });
}
