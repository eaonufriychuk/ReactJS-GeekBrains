import Human from './Human';

export default class User extends Human {
    constructor(firstName, lastName, login, age) {
        super(firstName, lastName);
        if (typeof login === 'string' && typeof age === 'number') {
            this.login = login;
            this.age = age;
        }
        this.state = {
            isOpen: true
        }
    }

    /**
     * Метод отрисовки параметров пользователя.
     * @param {HTMLElement} container Родительский контейнер.
     * @return {HTMLElement} Элемент, который добавляется в родительский контейнер.
     */
    render(container) {
        super.render(container);
        const result = document.createElement('div');
        const login = document.createElement('p');
        const age = document.createElement('p');
        const button = document.createElement('button');

        login.textContent = `Login: ${this.login}`;
        age.textContent = `Age: ${this.age}`;
        button.textContent = 'Показать дату';
        result.appendChild(login);
        result.appendChild(age);
        container.appendChild(result);
        result.appendChild(button);
        this.renderDate(result, button);

        return result;
    }

    /**
     * Метод для добавления даты.
     * @param {HTMLElement} container - Родительский контейнер.
     * @param {HTMLElement} button - Кнопка.
     */
    renderDate(container, button) {
        const {isOpen} = this.state;
        const dateContainer = document.createElement('p');
        const date = document.createElement('span');
        date.textContent = `${User.formatDate(new Date)}`;

        button.addEventListener('click', () => {
            if (isOpen) {
                dateContainer.appendChild(date);
                container.appendChild(dateContainer);
                button.textContent = 'Скрыть дату';
                isOpen = !isOpen;
            } else {
                dateContainer.removeChild(date);
                isOpen = !isOpen;
                button.textContent = 'Показать дату';
            }
        });

    }

    /**
     * Вывод даты в формате дд.мм.гг.
     * @param {object} date Текущая дата.
     * @return {string} Дата в формате дд.мм.гг.
     */
    static formatDate(date) {
        let dd = date.getDate();
        if (dd < 10) dd = `0${dd}`;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = `0${mm}`;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = `0${yy}`;

        return `${dd}.${mm}.${yy}`;
    }
}