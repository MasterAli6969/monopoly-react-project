export const carouselCard = [
  {
    id: 1,
    className: "active",
    img: "./img/lorem-inage-default1.jpg",
  },
  {
    id: 1,
    img: "./img/lorem-inage-default2.jpg",
  },
  {
    id: 1,
    img: "./img/lorem-inage-default1.jpg",
  },
];

export const valuePrice = [
  {
    id: 1,
    value: 100,
  },
  {
    id: 2,
    value: 200,
  },
  {
    id: 3,
    value: 500,
  },
  {
    id: 4,
    value: 1000,
  },
  {
    id: 5,
    value: 2000,
  },
  {
    id: 6,
    value: 3000,
  },
  {
    id: 7,
    value: 4000,
  },
];

export const questionButton = [
  {
    id: 1,
    dataTarget: "accordionItem1",
    dataBsTarget: "collapseOne",
    name: "Как отправить?",
  },
  {
    id: 1,
    dataTarget: "accordionItem2",
    dataBsTarget: "collapseTwo",
    name: "Как воспользоваться?",
  },
  {
    id: 1,
    dataTarget: "accordionItem3",
    dataBsTarget: "collapseThree",
    name: "Правила",
  },
];

export const accordionData = [
  {
    id: 1,
    idTeg: "accordionItem1",
    dataBsTarget: "collapseOne",
    accordName: "Как отправить?",
    accordItem: [
      {
        img: "./img/lorem-inage-default1.jpg",
        title: "Оформите",
        description:
          "Выберите номинал, дизайн, количество и напишите поздравление",
      },
      {
        img: "./img/lorem-inage-default2.jpg",
        title: "Оформите",
        description:
          "Выберите номинал, дизайн, количество и напишите поздравление",
      },
      {
        img: "./img/lorem-inage-default1.jpg",
        title: "Оформите",
        description:
          "Выберите номинал, дизайн, количество и напишите поздравление",
      },
    ],
  },
  {
    id: 2,
    idTeg: "accordionItem2",
    dataBsTarget: "collapseTwo",
    accordName: "Как воспользоваться?",
    accordItem: {
      title: "Как воспользоваться сертификатом Giftery Card",
      description1:
        "Дарите только нужные подарки. Получатель сможет обменять Giftery Card на подарочные карты известных брендов из списка обмена (ссылка на список обмена расположена в разделе 'Правила', пункт 2). Для получения полной информации Полный список доступных для обмена брендов можно посмотреть",
      liks1: { href: "/card-page", text: "посетите сайт" },
      liks2: { href: "/card-page", text: "здесь" },
      description2: "Для получения полной информации",
      liks3: { href: "/card-page", text: "посетите сайт" },
      description3:
        "Полный список доступных для обмена брендов можно посмотреть",
      liks4: { href: "/card-page", text: "здесь" },
      tablets: [
        {
          id: 1,
          icons: "bi bi-clock-history",
          description: "Обратите внимание на срок действия сертификата и",
          liks: { href: "/card-page", text: "условия использования" },
        },
        {
          id: 2,
          icons: "bi bi-box-seam",
          description:
            "Обменяйте Giftery Card в рамках номинала на один или несколько сертификатов брендов.",
          liks: { href: "/card-page", text: "из этого списка" },
        },
        {
          id: 2,
          icons: "bi bi-envelope-paper",
          description: "Обратите внимание на срок действия сертификата и",
          liks: {
            href: "",
            text: "Сразу после обмена Вам на почту придет письмо с подарочной картой выбранного бренда",
          },
        },
      ],
    },
  },
  {
    id: 3,
    idTeg: "accordionItem3",
    dataBsTarget: "collapseThree",
    accordName: "Правила",
    accordItem: [
      {
        id: 1,
        text: "Универсальный подарочный сертификат Giftery Card необходимо обменять на сайте на один или несколько сертификатов Партнеров из каталога обмена полученного сертификата.",
        liks: { href: "/card-page", text: "'Тут будет ссылка'" },
      },
      {
        id: 2,
        text: "Giftery Card можно обменять на сертификаты любых брендов и номиналов из каталога в рамках баланса.",
        liks: { href: "/card-page", text: "'Тут будет ссылка'" },
      },
      {
        id: 3,
        text: "Остаток баланса Giftery Card не сгорает до окончания срока действия - держатель может израсходовать его полностью или частично и вернуться к выбору позже.",
      },
      {
        id: 4,
        text: "Если держатель в течение срока действия не воспользовался Giftery Card полностью или частично, сертификат становится недействительным. При этом вся сумма баланса сгорает.",
      },
      {
        id: 5,
        text: "Универсальный подарочный сертификат Giftery Card не является ценной бумагой и не подлежит обмену на денежные средства.",
      },
      {
        id: 6,
        text: "Универсальный подарочный сертификат можно передавать любым лицам по своему усмотрению. При передаче универсального подарочного сертификата третьим лицам держатель универсального подарочного сертификата обязан проинформировать получателя об условиях обмена Giftery Card на сертификаты Партнеров, входящих в список обмена полученного сертификата. В случае нарушения этой обязанности держателями универсального подарочного сертификата Giftery Card, ООО «ГИФТЕРИ.РУ», по претензиям, связанным с отсутствием вышеуказанной информации, ответственности не несет.",
      },
      {
        id: 7,
        text: "Универсальный подарочный сертификат возврату не подлежит.",
      },
      {
        id: 8,
        text: "Дополнительную информацию о Giftery Card можно получить на странице'Тут будет ссылка'или по телефону 8-800 551 47 24.",
      },
    ],
  },
];
