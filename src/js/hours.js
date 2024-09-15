export const weatherDataHours = [
    {
        time: '00:00',
        image: './public/cloudy.png',
        degrees: '-11°',
    },
    {
        time: '03:00',
        image: './public/cloudy.png',
        degrees: '-15°',
    },
    {
        time: '06:00',
        image: './public/cloudy.png',
        degrees: '-17°',
    },
    {
        time: '09:00',
        image: './public/cloudy.png',
        degrees: '-10°',
    },
    {
        time: '12:00',
        image: './public/cloudy.png',
        degrees: '-7°',
    },
    {
        time: '15:00',
        image: './public/cloudy.png',
        degrees: '-5°',
    },
    {
        time: '18:00',
        image: './public/cloudy.png',
        degrees: '-7°',
    },
    {
        time: '21:00',
        image: './public/cloudy.png',
        degrees: '-9°',
    },
]

// Функция для создания карточек прогноза на 24 часа
export function createCardHours(data) {
    const hoursCard = document.createElement('div');
    hoursCard.className = 'weather__hours_slider-item';

    const hoursTime = document.createElement('p');
    hoursTime.className = 'slider__hours_time';
    hoursTime.textContent = data.time;

    const hoursImage = document.createElement('img');
    hoursImage.className = 'slider__hours__img';
    hoursImage.src = data.image;
    hoursImage.alt = data.title;

    const hoursDegrees = document.createElement('p');
    hoursDegrees.className = 'slider__hours__degrees';
    hoursDegrees.textContent = data.degrees;

    hoursCard.appendChild(hoursTime);
    hoursCard.appendChild(hoursImage);
    hoursCard.appendChild(hoursDegrees);

    return hoursCard;
}

// Функция для добавления всех карточек в контейнер
export function renderCardsHours(dataArray) {
    const container = document.getElementById('hours-container');
    container.innerHTML = ''; // Очистить контейнер перед добавлением новых карточек
    dataArray.forEach((data) => {
        const card = createCardHours(data);
        container.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', function () {
    let currentHoursIndex = 0;
    const hoursContainer = document.querySelector('.weather__hours_slider-items');
    const totalHoursItems = document.querySelectorAll('.weather__hours_slider-item').length;
    const gap = 16;

    function calculateItemsToShow() {
        const containerWidth = document.querySelector('.weather__slider').offsetWidth;
        const cardHoursWidth = document.querySelector('.weather__hours_slider-item').offsetWidth + gap;
        return Math.max(1, Math.floor(containerWidth / cardHoursWidth));
    }

    function updateSlider() {
        const cardHoursWidth = document.querySelector('.weather__hours_slider-item').offsetWidth;
        const itemsToShow = calculateItemsToShow();
        const maxIndex = totalHoursItems - itemsToShow;
        if (currentHoursIndex > maxIndex) {
            currentHoursIndex = maxIndex;
        }
        if (currentHoursIndex < 0) {
            currentHoursIndex = 0;
        }
        const offset = -currentHoursIndex * cardHoursWidth;
        hoursContainer.style.transform = `translateX(${offset}px)`;
    }

    document.querySelector('.slider__left').addEventListener('click', () => {
        currentHoursIndex--;
        if (currentHoursIndex < 0) {
            currentHoursIndex = totalHoursItems - calculateItemsToShow();
        }
        updateSlider();
    });

    document.querySelector('.slider__right').addEventListener('click', () => {
        currentHoursIndex++;
        if (currentHoursIndex > totalHoursItems - calculateItemsToShow()) {
            currentHoursIndex = 0;
        }
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);

    updateSlider();
});




