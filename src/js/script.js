import { weatherData, renderCards } from './cards.js';
import { weatherDataHours, renderCardsHours } from './hours.js';
import { weatherDataDays, renderCardsDays } from './days.js';


document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const clearButton = document.getElementById('clear-button');
    const closeButton = document.getElementById('close-button');
    const searchInput = document.getElementById('search');

    // Добавление и удаление кнопок при клике на форму
    searchInput.addEventListener('focus', (event) => {
        event.preventDefault();
        clearButton.style.display = 'none';
        closeButton.style.display = 'block';
    });

    // Очистка поля и возврат к изначальному состоянию при клике на кнопку закрытия
    closeButton.addEventListener('click', () => {
        searchInput.value = '';
        clearButton.style.display = 'block';
        closeButton.style.display = 'none';
    });

    // Убираем фокус, чтобы вернуть кнопку в изначальное состояние
    searchInput.addEventListener('blur', () => {
        if (searchInput.value === '') {
            clearButton.style.display = 'block';
            closeButton.style.display = 'none';
        }
    });

});


document.addEventListener('DOMContentLoaded', () => {
    const itemHours = document.getElementById('item__hours');
    const itemDays = document.getElementById('item__days');
    const hoursContainer = document.getElementById('hours-container');
    const daysContainer = document.getElementById('days-container');

    // Функция для отображения блока "на 24 часа"
    itemHours.addEventListener('click', (event) => {
        event.preventDefault();
        hoursContainer.style.display = 'flex';
        daysContainer.style.display = 'none';
        
        itemHours.classList.add('weather_active');
        itemDays.classList.remove('weather_active');
    });

    // Функция для отображения блока "на 5 дней"
    itemDays.addEventListener('click', (event) => {
        event.preventDefault();
        hoursContainer.style.display = 'none';
        daysContainer.style.display = 'flex';
        
        itemDays.classList.add('weather_active');
        itemHours.classList.remove('weather_active');
    });

    // Изначально показываем блок "на 24 часа" и скрываем "на 5 дней"
    hoursContainer.style.display = 'flex';
    daysContainer.style.display = 'none';

    // Устанавливаем класс для активной ссылки
    itemHours.classList.add('weather_active');
});


// Вызов функции для отображения карточек
renderCards(weatherData);
renderCardsHours(weatherDataHours);
renderCardsDays(weatherDataDays);


