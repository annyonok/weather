export const weatherDataDays = [
    {
        date: 'Пн, 08 янв.',
        image: './public/few_clouds.png',
        degrees: 'от -16° до -8°',
    },
    {
        date: 'Вт, 09 янв.',
        image: './public/cloudy.png',
        degrees: 'от -8° до -2°',
    },
    {
        date: 'Ср, 09 янв.',
        image: './public/cloudy.png',
        degrees: 'от -8° до -2°',
    },
    {
        date: 'Чт, 09 янв.',
        image: './public/cloudy.png',
        degrees: 'от -8° до -2°',
    },
    {
        date: 'Птн, 09 янв.',
        image: './public/cloudy.png',
        degrees: 'от -8° до -2°',
    },
    {
        date: 'Суб, 09 янв.',
        image: './public/cloudy.png',
        degrees: 'от -8° до -2°',
    },
    {
        date: 'Вс, 07 янв.',
        image: './public/few_clouds.png',
        degrees: 'от  -17° до -11°',
    },
]

// Функция для создания карточек прогноза на 5 дней
export function createCardDays(data) {
    const daysCard = document.createElement('div');
    daysCard.className = 'weather__days_slider-item';

    const daysDate = document.createElement('p');
    daysDate.className = 'slider__days_data';
    daysDate.textContent = data.date;

    const daysImage = document.createElement('img');
    daysImage.className = 'slider__days_img';
    daysImage.src = data.image;
    daysImage.alt = data.title;

    const daysDegrees = document.createElement('p');
    daysDegrees.className = 'slider__days_degrees';
    daysDegrees.textContent = data.degrees;

    daysCard.appendChild(daysDate);
    daysCard.appendChild(daysImage);
    daysCard.appendChild(daysDegrees);

    return daysCard;
}

// Функция для добавления всех карточек в контейнер
export function renderCardsDays(weatherDataDays) {
    const container = document.getElementById('days-container');
    container.innerHTML = ''; // Очистить контейнер перед добавлением новых карточек
    weatherDataDays.forEach((data, index) => {
        const card = createCardDays(data);
        // if (index >= 3) {
        //     card.classList.add('hidden'); // Добавляем класс, чтобы скрыть карточки
        // }
        container.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', function () {
    let currentDaysIndex = 0;
    const daysContainer = document.querySelector('.weather__days_slider-items');
    const totalDaysItems = document.querySelectorAll('.weather__days_slider-item').length;
    const gap = 16;

    function calculateItemsToShow() {
        const containerWidth = document.querySelector('.weather__slider').offsetWidth;
        const cardDaysWidth = document.querySelector('.weather__days_slider-item').offsetWidth + gap;
        return Math.max(1, Math.floor(containerWidth / cardDaysWidth));
    }

    function updateSlider() {
        const cardDaysWidth = document.querySelector('.weather__days_slider-item').offsetWidth;
        const itemsToShow = calculateItemsToShow();
        const maxIndex = totalDaysItems - itemsToShow;
        if (currentDaysIndex > maxIndex) {
            currentDaysIndex = maxIndex;
        }
        if (currentDaysIndex < 0) {
            currentDaysIndex = 0;
        }
        const offset = -currentDaysIndex * cardDaysWidth;
        daysContainer.style.transform = `translateX(${offset}px)`;
    }

    document.querySelector('.slider__left').addEventListener('click', () => {
        currentDaysIndex--;
        if (currentDaysIndex < 0) {
            currentDaysIndex = totalDaysItems - calculateItemsToShow();
        }
        updateSlider();
    });

    document.querySelector('.slider__right').addEventListener('click', () => {
        currentDaysIndex++;
        if (currentDaysIndex > totalDaysItems - calculateItemsToShow()) {
            currentDaysIndex = 0;
        }
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);

    updateSlider();
});