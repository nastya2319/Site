document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    
    // Проверяем сохраненную тему в localStorage при загрузке страницы
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Свет'; // Устанавливаем текст кнопки в зависимости от темы
    } else {
        toggleButton.textContent = 'Темнота'; // Устанавливаем текст кнопки в зависимости от темы
    }
});

const toggleButton = document.getElementById('pekluch');

toggleButton.addEventListener('click', function() {
    const body = document.body;
    
    // Добавляем или удаляем класс 'dark-mode' для переключения темы
    body.classList.toggle('dark-mode');
    
    // Сохраняем текущее состояние темы в localStorage
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
    
    // Изменяем текст кнопки в зависимости от темы
    if (darkModeEnabled) {
        toggleButton.textContent = 'Свет';
    } else {
        toggleButton.textContent = 'Темнота';
    }
});
