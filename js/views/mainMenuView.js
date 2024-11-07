// js/views/mainMenuView.js
export function renderMainMenu() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="main-menu">
        <h1>Добро пожаловать в Клиника</h1>
        <nav>
          <ul>
            <li><a href="#doctors">Специалисты</a></li>
            <li><a href="#history">История болезни</a></li>
            <li><a href="#profile">Профиль</a></li>
            <li><a href="#events">Акции и события</a></li>
            <li><a href="#chat">Чат с клиникой</a></li>
            <li><a href="#faq">Частые вопросы</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
  