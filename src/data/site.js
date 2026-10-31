// ========================================================
// ГЛОБАЛЬНЫЕ НАСТРОЙКИ САЙТА
// ========================================================
// Здесь меняем название проекта, меню, контакты и подвал.
// Меню задаёт и порядок ссылок в шапке, и доступные страницы.
//
// key страницы должен совпадать с ключом из src/App.jsx (объект PAGES).
// ========================================================

export const site = {
  // Название проекта / логотип в шапке
  name: '/Logo.jpg',

  // Короткий слоган рядом с логотипом (можно оставить пустым или убрать в Header)
  tagline: 'Фигня номер два',

  // Пункты меню. Порядок здесь = порядок ссылок на сайте.
  nav: [
    { key: 'home', label: 'Главная' },
  { key: 'services', label: 'Издания Fallout' },
    //{ key: 'portfolio', label: 'Издания Fallout' },
    { key: 'about', label: 'О нас' },
 //   { key: 'calculator', label: 'Калькулятор' },
    { key: 'contacts', label: 'Контакты' },
  ],

  // Кнопка в правом углу шапки
  headerCta: { label: 'НЕ ТЫКАТЬ', page: 'calculator' },

  // Контакты (используются на странице «Контакты» и в подвале)
  contacts: {
    phone: '+7 945 132-56-23',
    email: 'getouthere@gmail.com',
    address: 'г. Нигде, ул. Никакая, 15, офис 5',
    hours: 'Пн–Пт, 10:00–19:00',
    telegram: '@гуляйдальше',
    telegramUrl: 'https://t.me/telegram_nick',
  },

  // Подвал сайта
  footer: {
    about:
      'Да ничего особо не делаем.',
    // Колонки со ссылками. Ссылка может вести на страницу (page) или наружу (href).
    columns: [
      {
        title: 'Навигация',
        links: [
          { label: 'Главная', page: 'home' },
          { label: 'Купить Fallout', page: 'services' },
        //  { label: 'Купить Fallout', page: 'portfolio' },
          { label: 'О нас', page: 'about' },
        ],
      },
      {
        title: 'Клиентам',
        links: [
          { label: 'Не тыкать', page: 'calculator' },
          { label: 'Контакты', page: 'contacts' },
          { label: 'Наш Telegram', href: 'https://t.me/telegram_nick' },
        ],
      },
    ],
    copyright: 'Все права защищены',
    author: 'Студенческий проект | Разработчик: @FainVoller',
  },
};
