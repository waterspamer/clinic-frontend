// js/components/appointmentForm.js
export function appointmentForm(doctor) {
    return `
      <form id="appointment-form">
        <label for="date">Выберите дату:</label>
        <input type="date" id="date" name="date" required>
  
        <label for="time">Выберите время:</label>
        <select id="time" name="time" required>
          <!-- Опции времени будут динамически загружены -->
        </select>
  
        <label for="comments">Комментарии:</label>
        <textarea id="comments" name="comments"></textarea>
  
        <button type="submit" class="btn">Подтвердить запись</button>
      </form>
    `;
  }
  