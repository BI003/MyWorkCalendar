const daysContainer = document.querySelector(".days");

const prevMonthButton = document.querySelector("#prevMonth");

const nextMonthButton = document.querySelector("#nextMonth");

const monthTitle = document.querySelector("#monthTitle");

const dayInfo = document.querySelector("#dayInfo"); // Находим панель информации о дне

const selectedDate = document.querySelector("#selectedDate"); // Находим заголовок внутри панели

const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

function renderCalendar() {

    monthTitle.textContent = `${monthNames[month]} ${year}`;

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const firstDay = new Date(year, month, 1).getDay();

    const startOffset = firstDay === 0 ? 6 : firstDay - 1;

    daysContainer.innerHTML = "";

    for (let i = 0; i < startOffset; i++) {

        const emptyDay = document.createElement("div");

        daysContainer.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {

    const dayElement = document.createElement("div");   // Создаём клетку дня

    dayElement.textContent = day;   // Записываем номер дня

    dayElement.addEventListener("click", function () {  // Код выполнится, когда нажмём на этот день

    dayInfo.classList.add("active"); // Показываем панель информации

    selectedDate.textContent = `${day} ${monthNames[month]} ${year}`; // Показываем выбранную дату  
});

    if (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
    ) {
        dayElement.classList.add("today");  // Добавляем класс "today"
    }

    daysContainer.appendChild(dayElement);
    }
}

renderCalendar();

nextMonthButton.addEventListener("click", function () {

    month = month + 1;
    
    if (month > 11) {
        month = 0;
        year = year + 1;
    }

    renderCalendar();
});

prevMonthButton.addEventListener("click", function () {

    month = month - 1;

    if (month < 0) {
        month = 11;
        year = year - 1;
    }

    renderCalendar();
});