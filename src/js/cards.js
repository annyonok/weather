export const addProgressbar = `
    <div class="progress__container">
        <div class="progress__bar">
            <div class="progress__ball"></div>
        </div>
    </div>
`;

export const addPersentHumidity = `
    <div class="progress__text_box">
        <div class="progress__text" id="progress-text-0">0%</div>
            <div class="progress__text" id="progress-text-100">100%</div>
    </div>
`;


export const weatherData = [
    {
        title: 'Влажность',
        image: './public/humidity.svg',
        meaning: '75 %',
        progressbar: addProgressbar,
    },
    {
        title: 'Давление',
        image: './public/barometr.svg',
        meaning: '761',
        progressbar: addProgressbar,
        text1: 'Повышенное',
    },
    {
        title: 'Видимость',
        image: './public/visibility.svg',
        meaning: '28 км',
        progressbar: addProgressbar,
        text1: 'Нормальная',
    },
    {
        title: 'Рассвет',
        image: './public/sunrise.svg',
        meaning: '8:42',
        text1: 'Прошло: 02:47',
    },
    {
        title: 'Закат',
        image: './public/sunset.svg',
        meaning: '16:37',
        text1: 'Осталось: 05:08',
    },
    {
        title: 'Сила ветра',
        image: './public/direction.svg',
        meaning: '2 м/с',
        text1: 'Северо-западный',
    },
];

// Функция для создания карточки
export function createCard(data, index) {
    const card = document.createElement('div');
    card.className = 'weather__today_card';

    const title = document.createElement('h3');
    title.className = 'card__title';
    title.textContent = data.title;

    const image = document.createElement('img');
    image.className = 'card__image';
    image.src = data.image;
    image.alt = data.title;

    const meaning = document.createElement('p');
    meaning.className = 'card__meaning';
    meaning.textContent = data.meaning;

    const progressbarContainer = document.createElement('div');
    if (index < 3) { // Добавляем прогресс-бар только для первых 3 карточек
        progressbarContainer.innerHTML = addProgressbar;
    }

    const addPersentContainer = document.createElement('div');
    if (index < 1) {
        addPersentContainer.innerHTML = addPersentHumidity;
    }

    const text1 = document.createElement('div');
    text1.className = 'progress__text';
    text1.textContent = data.text1;

    const text2 = document.createElement('div');
    text2.className = 'progress__text';
    text2.textContent = data.text2;


    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(meaning);
    card.appendChild(progressbarContainer);
    card.appendChild(addPersentContainer);
    card.appendChild(text1);
    card.appendChild(text2);

    return card;
}


// Функция для добавления всех карточек в контейнер
export function renderCards(dataArray) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Очистить контейнер перед добавлением новых карточек
    dataArray.forEach((data, index) => {
        const card = createCard(data, index);
        container.appendChild(card);
    });
}

