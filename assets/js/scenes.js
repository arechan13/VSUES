let scenes = Array();

scenes.push(
  {
    name: "Начало",
    background: "graynd",
    character1: "null",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Начать игру",
        scene: "Приветствие"
      }
    )
  }
);

//Приветствие маскота ВГУЭСа
scenes.push(
  {
    name: "Приветствие",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Приветствую тебя, дорогой абитуриент!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Должно быть, ты пришел, чтобы узнать о специальностях филиала Владивостокского государственного университета экономики и сервиса в городе Артем?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Я тебе в этом помогу.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Для начала расскажу тебе немного о нашем учебном заведении.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Филиал ВГУЭС в городе Артем – это крупнейшее учебное заведение на территории Артемовского городского округа, осуществляющее подготовку кадров экономического, информационного, сервисного, транспортного и управленческого профилей.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Сегодня в филиале обучается более 2000 студентов!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Наш преподавательский состав - кадры с высшей научно-педагогической квалификацией, с учеными степенями и званиями.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Кроме получения основных профессиональных знаний, учебная программа направлена на формирование предпринимательского мышления у студентов.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Поступив к нам, ты, несомненно, узнаешь много нового!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Кроме того, с нами точно не соскучишься!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Студенты филиала активно участвуют в творческой жизни вуза, становясь ежегодно призерами и победителями университетских конкурсов, межвузовских, городских, региональных и всероссийских фестивалей и мероприятий.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Надеюсь, я тебя заинтересовал!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/отрицание",
    character2: null,
    message: "Однако, что-то я заболтался...",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Тебе, наверняка не терпится узнать о наших специальностях.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "С каким направлением нашего колледжа ты бы хотел познакомиться?",
    choices: null
  }
);

//Выбор специальности
scenes.push(
  {
    name: "Выбор направления",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Информационные технологии",
        scene: "Информационные технологии"
      },
      {
        message: "Педагогика",
        scene: "Педагогика"
      },
      {
        message: "Право и организация социального обеспечения",
        scene: "Право и организация социального обеспечения"
      },
      {
        message: "Организация перевозок и управление на транспорте",
        scene: "Организация перевозок и управление на транспорте"
      },
      {
        message: "Гостиничное дело",
        scene: "Гостиничное дело"
      },
      {
        message: "Банковское дело",
        scene: "Банковское дело"
      },
      {
        message: "Реклама",
        scene: "Реклама"
      },
      {
        message: "Коммерция",
        scene: "Коммерция"
      },
      {
        message: "Экономика и бухгалтерский учет",
        scene: "Экономика и бухгалтерский учет"
      },
      {
        message: "Строительство и эксплуатация зданий и сооружений",
        scene: "Строительство и эксплуатация зданий и сооружений"
      },
      {
        message: "Техническое обслуживание и ремонт автомобилей",
        scene: "Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей"
      }
    )
  }
);

//Информационные технологии
scenes.push(
  {
    name: "Информационные технологии",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/приветствие+разговор",
    character2: null,
    message: "Здравствуйте...",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "Вы пришли узнать о направлении Информационные технологии?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "Думаю, я смогу помочь вам.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "Наше направление подразделяется на 2 специальности: Сетевое и системное администрирование и Информационные системы и программирование.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "Какая специальность вас интересует?",
    choices: null
  }
);
scenes.push(
  {
    name: "ИТ Специальности",
    background: "first",
    character1: "Программирование/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Сетевое и системное администрирование",
        scene: "Администрирование"
      },
      {
        message: "Информационные системы и программирование",
        scene: "Программирование"
      }
    )
  }
);
scenes.push(
  {
    name: "Администрирование",
    background: "first",
    character1: "Программирование/приветствие+разговор",
    character2: null,
    message: "Системный администратор — это специалист, который занимается настройкой, совершенствованием и поддержкой ИТ-инфраструктуры компании, включая оборудование, периферию, программное обеспечение и сетевые подключения.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "Основные профили обучения - это системное и сетевое администрирование.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "Системное администрирование включает в себя обучение базовым навыкам пользования ПК, настройке оборудования и программного обеспечения",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "А сетевое администрирование включает в себя обучение базовым навыкам по настройке физических и логических сетей в компании, а также управлением системами биллинга, учёта и контроля трафика",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "Проще говоря, на этой специальности вы получите знания и навыки, необходимые для контроля офисной работы на компьютере, ",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "Хотите узнать о второй специальности?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, расскажите и о другой специальности.",
        scene: "ИТ Специальности"
      },
      {
        message: "Пожалуй, нет.",
        scene: "ИТ Прощание"
      }
    )
  }
);
scenes.push(
  {
    name: "Программирование",
    background: "first",
    character1: "Программирование/приветствие+разговор",
    character2: null,
    message: "Информационные системы и программирование - специальность, связанная с разработкой операционных систем, информационных систем, баз данных и других программных продуктов.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/приветствие+разговор",
    character2: null,
    message: "Включает в себя вопросы проектирования и сопровождения, программное и информационное обеспечение компьютерных систем с использованием современных средств вычислительной техники, телекоммуникаций и технологий автоматизированного проектирования.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "В цикле профессиональных дисциплин студенты изучают безопасность информационных систем, системное программирование, WEB-дизайн и графическое моделирование объектов.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/приветствие+разговор",
    character2: null,
    message: "Проще говоря, на этой специальности вас научат базовым навыкам разработки и интерирования модулей программного обеспечения, баз данных, сайтов и игр.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "Хотите узнать о второй специальности?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, расскажите и о другой специальности.",
        scene: "ИТ Специальности"
      },
      {
        message: "Пожалуй, нет.",
        scene: "ИТ Прощание"
      }
    )
  }
);
scenes.push(
  {
    name: "ИТ Прощание",
    background: "first",
    character1: "Программирование/разговор",
    character2: null,
    message: "Надеюсь, я смогла помочь...",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Программирование/отрицание",
    character2: null,
    message: "А сейчас я бы хотела отдохнуть. Очередная бессоная ночь не прошла бесследно. До свидания...",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);

//Педагогика
scenes.push(
  {
    name: "Педагогика",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/приветствие+разговор",
    character2: null,
    message: "Привет! Вы интересуетесь педагогическим направлением?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/приветствие+разговор",
    character2: null,
    message: "Я с большим удовольствием расскажу вам о этом.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/разговор",
    character2: null,
    message: "Направление подразделяется на 2 специальности: Дошкольное образование и Преподавание в начальных классах.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/разговор",
    character2: null,
    message: "Про какую из них вы хотели бы узнать?",
    choices: null
  }
);
scenes.push(
  {
    name: "Педагогика Специальности",
    background: "first",
    character1: "Педагогика/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Дошкольное образование",
        scene: "Дошкольное образование"
      },
      {
        message: "Преподавание в начальных классах",
        scene: "Начальные классы"
      }
    )
  }
);
scenes.push(
  {
    name: "Дошкольное образование",
    background: "first",
    character1: "Педагогика/разговор",
    character2: null,
    message: "Данная специальность готовит из студентов воспитателей детей дошкольного возраста.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/разговор",
    character2: null,
    message: "Предметной областью является наука о воспитании, обучении и развитии детей раннего и дошкольного возраста, совокупность дисциплин, обеспечивающих педагогическое образование специалиста системы дошкольного образования.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/разговор",
    character2: null,
    message: "Выпускникам этой специальности предстоит работать в таких местах как детский сад, интернат или центр развития, осуществляя уход за детьми от 2 месяцев до 7 лет, организовывая их досуг и обучение, а также обеспечивая безопасность.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/приветствие+разговор",
    character2: null,
    message: "Несомненно, в такой деятельности очень важна любовь к детям!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/разговор",
    character2: null,
    message: "Интересна ли вам вторая специальность нашего напрвления?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, расскажите и о другой специальности.",
        scene: "Педагогика Специальности"
      },
      {
        message: "Пожалуй, нет.",
        scene: "Педагогика Прощание"
      }
    )
  }
);
scenes.push(
  {
    name: "Начальные классы",
    background: "first",
    character1: "Педагогика/разговор",
    character2: null,
    message: "Учитель начальных классов — это педагог, занимающийся обучением и воспитанием детей младшего школьного возраста, с 1 по 4 класс общеобразовательного учреждения.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/разговор",
    character2: null,
    message: "Основной обязанностью учителя начальных классов является осуществление целостного педагогического процесса в соответствии с образовательными программами начальной школы.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/приветствие+разговор",
    character2: null,
    message: "Ключевой целью деятельности учителя начальных классов является формирования главной способности у учащихся: научиться учиться. При этом, разумеется, обеспечивать школьникам получение базовых знаний.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/разговор",
    character2: null,
    message: "Помимо основной профессии учитель может работать: коррекционным педагогом; педагогом-психологом; учителем-предметником; тьютором; педагогом-организатором. Чтобы стать одним из этих специалистов, достаточно пройти курсы профпереподготовки.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/разговор",
    character2: null,
    message: "Интересна ли вам вторая специальность нашего напрвления?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, расскажите и о другой специальности.",
        scene: "Педагогика Специальности"
      },
      {
        message: "Пожалуй, нет.",
        scene: "Педагогика Прощание"
      }
    )
  }
);
scenes.push(
  {
    name: "Педагогика Прощание",
    background: "first",
    character1: "Педагогика/приветствие+разговор",
    character2: null,
    message: "Очень рада, что вы к нам заглянули!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Педагогика/приветствие+разговор",
    character2: null,
    message: "Буду надеяться, что в мире появится еще один замечательный педагог. Хорошего дня!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);


//Право и организация социального обеспечения
scenes.push(
  {
    name: "Право и организация социального обеспечения",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Право/приветствие+разговор",
    character2: null,
    message: "Добрый день. Интересуетесь специальностью Право и организация социального обеспечения?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Право/приветствие+разговор",
    character2: null,
    message: "Вы обратились по адресу! Я расскажу вам о ней.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Право/разговор",
    character2: null,
    message: "Специальность Право и организация социального обеспечения подготавливает юристов, обеспечивающих реализацию правовых норм и охрану правопорядка в сфере социальной защиты населения.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Право/разговор",
    character2: null,
    message: "Студенты изучают обеспечение и реализацию прав граждан в сфере пенсионного обеспечения и социальной защиты, включающую в себя судебно-правовую защиту.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Право/разговор",
    character2: null,
    message: "Основой профессиональных дисциплин является правовое законодательство РФ: Конституционное, Административное, Трудовое, Семейное, Гражданское право и иные нормативно-правовые акты. ",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Право/разговор",
    character2: null,
    message: "Обучение предполагает прохождение практики в государственных органах, центрах и отделах частных предприятий, занимающихся обеспечением и реализацией прав граждан.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Право/приветствие+разговор",
    character2: null,
    message: "Мы будем рады увидеть ответственных студентов. Надеюсь, твой выбор падет на нашу специальность. До новых встреч и удачи!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);

//Организация перевозок и управление на транспорте
scenes.push(
  {
    name: "Организация перевозок и управление на транспорте",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Логистика/приветствие+разговор",
    character2: null,
    message: "Добрый день. Могу я вам помочь?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Логистика/разговор",
    character2: null,
    message: "Ах, да, вы же пришли, чтобы узнать о специальности Организация перевозок и управление на транспорте.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Логистика/разговор",
    character2: null,
    message: "Специальность готовит студентов к выполнению профессиональной деятельности в сфере перевозок и управления на транспорте, транспортной логистики, экспедирования. ",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Логистика/разговор",
    character2: null,
    message: "Обучающиеся изучают планирование и управление как грузовыми, так и пассажирскими перевозками.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Логистика/разговор",
    character2: null,
    message: "Студента подготавливают к таким видам деятельности, как: организация перевозочного процесса, транспортно-логистической деятельности и организация сервисного обслуживания на транспорте.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Логистика/разговор",
    character2: null,
    message: "Если говорить кратко, то это сфера деятельности, связанная с поставками, снабжением, контролем и организацией транспортировки грузов, при этом все базируется на правовых нормах и экономических законах.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Логистика/приветствие+разговор",
    character2: null,
    message: "Изучаемые дисциплины включают в себя множество процессов: управление, планирование, минимизация трат, соблюдение сроков, увеличение прибыльности и пр. ",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Логистика/разговор",
    character2: null,
    message: "Хотя, такая профессия актуальна везде, могу сказать, что в нашем крае она особенно востребована.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Логистика/приветствие+разговор",
    character2: null,
    message: "Будет здорово, если твой выбор выбор падет именно на нее!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Логистика/приветствие+разговор",
    character2: null,
    message: "На этом я откланяюсь. Хорошего дня, будущий студент!",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);



//Гостиничное дело
scenes.push(
  {
    name: "Гостиничное дело",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Гостиница/приветствие+разговор",
    character2: null,
    message: "Добро пожаловать. Чем я могу вам помочь?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Гостиница/разговор",
    character2: null,
    message: "Хотели бы узнать о нашей специальности Гостиничное дело?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Гостиница/разговор",
    character2: null,
    message: "Я расскажу вам о ней.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Гостиница/разговор",
    character2: null,
    message: "Гостиничный бизнес - это сфера экономики, которая связаная с профессиональным предоставлением услуг по проживанию и бытовому обслуживанию клиентов в гостиницах.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Гостиница/разговор",
    character2: null,
    message: "На данном направлении обучают специалистов, обеспечивающих организацию обслуживания гостей в гостиницах и туристических комплексах.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Гостиница/приветствие+разговор",
    character2: null,
    message: "Изучаются профессиональные дисциплины, охватывающие организацию и управление деятельностью персонала гостиницы, направленной на удовлетворение всевозможных нужд гостей. Также изучаются правила общения с клиентами.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Гостиница/разговор",
    character2: null,
    message: "Также прорабатывается модель поведения при общении с клиентами и координировании по услугам гостиницы.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Гостиница/разговор",
    character2: null,
    message: "Направление требует от студентов коммуникабельности и лидерских качеств.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Гостиница/приветствие+разговор",
    character2: null,
    message: "Возможно, такая профессия подойдет именно вам!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Гостиница/приветствие+разговор",
    character2: null,
    message: "Буду рада увидеть вас снова. Желаю удачи в поступлении! Хорошего дня.",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);


//Банковское дело
scenes.push(
  {
    name: "Банковское дело",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Банк/приветствие+разговор",
    character2: null,
    message: "Добрый день. Чем я могу вам помочь?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Банк/разговор",
    character2: null,
    message: "Желаете узнать о специальности Банковское дело?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Банк/разговор",
    character2: null,
    message: "Объектом профессиональной деятельности выпускников являются различного рода банковские операции.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Банк/разговор",
    character2: null,
    message: "Среди конкретных видов деятельности: осуществление расчетных и кредитных операций, ведение документации по оформлению банковских операций, выполнение операций с ценными бумагами",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Банк/разговор",
    character2: null,
    message: "Студенты обучаются правовым и организационным основам деятельности кредитных организаций, сущности и технологии совершения банковских операций и сделок, правил ведения бухгалтерского учета.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Банк/приветствие+разговор",
    character2: null,
    message: "Также изучаются угрозы банковской безопасности и мер по их устранению.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Банк/разговор",
    character2: null,
    message: "Специалист банковского дела может работать в банках, плановых отделах, отделах инвестиционного проектирования, страховых компаниях, кредитных организациях, финансовых учреждениях, биржах.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Банк/разговор",
    character2: null,
    message: "Надеюсь, я вам доступно объяснила, чему учат на нашей специальности.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Банк/приветствие+разговор",
    character2: null,
    message: "А теперь мне нужно вернуться к своей работе. Всего доброго.",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);

//Реклама
scenes.push(
  {
    name: "Реклама",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/приветствие+разговор",
    character2: null,
    message: "Здравствуй, дорогой абитуриент! Очень рад тебя видеть в нашем колледже!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/разговор",
    character2: null,
    message: "Интересуешься специальностью Реклама? ",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/приветствие+разговор",
    character2: null,
    message: "Если ты обладаешь богатой фантазией и навыками эффективного общения, то ты определенно отличный кандидат для нашей специальности!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/разговор",
    character2: null,
    message: "Как мне и полагает, я очень постараюсь тебя заинтересовать.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/разговор",
    character2: null,
    message: "Специалист по рекламе занимается разработкой и проведением рекламных кампаний, акций и мероприятий, формирует рекламную политику организации, исследует покупательский спрос, работает с целевыми группами, анализирует эффективность рекламы.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/разговор",
    character2: null,
    message: "Хоть деятельность выпускников на разных предприятиях и может отличаться, думаю, очевидно, что в первую очередь такая профессия предполагает работу с людьми, косвенно или напрямую, помогая товару и потребителю найти друг друга.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/разговор",
    character2: null,
    message: "Наиболее важно в такой профессии - найти подход для каждой категории потребителя и товара. Потому наши студенты глубже всего изучают такую дисциплину как маркетинг.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/приветствие+разговор",
    character2: null,
    message: "Творческое мышление также является важным качеством успешного рекламиста, так как для эффективности рекламы невероятно важны способ подачи и внешний вид рекламы.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/отрицание",
    character2: null,
    message: "В наше время все сложнее становится отличиться оригинальностью, при этом не снизив эффективность рекламной компании.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/разговор",
    character2: null,
    message: "Обучение охватывает такие виды деятельности как: разработка дизайна рекламной продукции, маркетинговое и правовое обеспечение реализации рекламного продукта, а также основы экономики и предпринимательской деятельности.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/разговор",
    character2: null,
    message: "Думаю, не стоит говорить о том, насколько в современном обществе актуальна такая профессия, это очевидно.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/приветствие+разговор",
    character2: null,
    message: "Именно поэтому я буду счастлива пополнению в нашей команде!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Реклама/приветствие+разговор",
    character2: null,
    message: "Желаю удачи в поступлении! Надеюсь снова тебя увидеть уже будучи студентом нашей специальности!",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);

//Экономика и бухгалтерский учет 
scenes.push(
  {
    name: "Экономика и бухгалтерский учет",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/приветствие+разговор",
    character2: null,
    message: "Здравствуйте. Вы абитуриент, не так ли?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/разговор",
    character2: null,
    message: "Пришли, чтобы узнать о специальности Экономика и бухгалтерский учет?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/разговор",
    character2: null,
    message: "Отлично, нам не помешало бы пополнение.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/отрицание",
    character2: null,
    message: "Ненешняя молодежь совсем не хочет считать...",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/разговор",
    character2: null,
    message: "Кхм, извините. Так о чем я...",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/приветствие+разговор",
    character2: null,
    message: "Учеба на бухгалтера требует большой собранности и усидчивости — все профилирующие дисциплины так или иначе связаны с цифрами, расчетами и таблицами.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/разговор",
    character2: null,
    message: "Наши студенты изучают: основы экономической теории, организацию и технологию отрасли, микроэкономику, теорию бухгалтерского учета.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/разговор",
    character2: null,
    message: "Также будущие бухгалтеры осваивают специализированные компьютерные программы, в том числе и 1C: Бухгалтерия, электронные таблицы и базы данных.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/разговор",
    character2: null,
    message: "Объектами профессиональной деятельности выпускников являются: имущество и обязательства организации, хозяйственные операции, финансово-хозяйственная информация, налоговая информация, бухгалтерская отчетность, первичные трудовые коллективы.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/разговор",
    character2: null,
    message: "В общем: считать, считать и еще раз считать. Надеюсь, у вас хорошо с математикой, так как в такой работе ошибки недопустимы.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/разговор",
    character2: null,
    message: "Профессия, очевидно, очень актуальна. Ведь очевидно, нет таких предприятий, где не понадобится бухгалтер.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/приветствие+разговор",
    character2: null,
    message: "Если поступите к нам, точно не пожалеете!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/разговор",
    character2: null,
    message: "А теперь прошу меня простить, мне нужно успеть закончить финансовый отчет за сегодня.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Экономика/приветствие+разговор",
    character2: null,
    message: "Надеюсь увидеть вас на поступлении. Желаю удачи!",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);


//Строительство и эксплуатация зданий и сооружений
scenes.push(
  {
    name: "Строительство и эксплуатация зданий и сооружений",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/приветствие+разговор",
    character2: null,
    message: "Добро пожаловать, абитуриент!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/приветствие+разговор",
    character2: null,
    message: "Буду рад рассказать тебе о нашей специальности.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/разговор",
    character2: null,
    message: "Строительство и эксплуатация зданий и сооружений – специальность, выпускники которой работают в проектных, строительных, строительно-монтажных организациях по строительству, эксплуатации и реконструкции жилых, общественных и промышленных объектов.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/разговор",
    character2: null,
    message: "Объясню яснее и по порядку.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/разговор",
    character2: null,
    message: "Строительство включает в себя знания о возведение зданий и сооружений, а также их капитальному и текущему ремонту, их реконструкции, реставрации и реновации.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/разговор",
    character2: null,
    message: "Эксплуатация зданий и сооружений – это комплекс работ, призванных обеспечить безотказное функционирование всех элементов и систем здания в течение его нормативного срока службы и в соответствии с его назначением.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/приветствие+разговор",
    character2: null,
    message: "Короче говоря, студенты обучаются планированию и реализации построения зданий и сооружений. И, разумеется, тому, как сделать, чтобы постройка оставалась целой очень долго!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/разговор",
    character2: null,
    message: "Обучение будет включать в себя как черчение планов построек, так и практику в построении и ремонте.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/приветствие+разговор",
    character2: null,
    message: "Творческое мышление тоже не помешает!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/отрицание",
    character2: null,
    message: "Однако, не всегда хорошо, если в такой ответственной работе фантазия выходит за рамки.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/разговор",
    character2: null,
    message: "Все-таки от нашей работы зависит очень многое, в том числе и безопасность людей.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/приветствие+разговор",
    character2: null,
    message: "Поэтому я буду счастлив, если ты выберешь нашу специальность и окажешься исполнительным и талантливым строителем.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Строительство/приветствие+разговор",
    character2: null,
    message: "Не буду больше задерживать, удачи в поступлении!",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);


//Техническое обслуживание и ремонт двигателей систем и агрегатов автомобилей 
scenes.push(
  {
    name: "Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/приветствие+разговор",
    character2: null,
    message: "Здравия желаю, дорогой гость.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/разговор",
    character2: null,
    message: "Я расскажу тебе о специальности Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/разговор",
    character2: null,
    message: "Возможно, тебе это профессиональное направление больше знакомо тебе под названием 'Механик'.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/разговор",
    character2: null,
    message: "Хотя, на самом деле, это не совсем точное название.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/приветствие+разговор",
    character2: null,
    message: "Наши студенты как в теории, так и на практике учатся осуществлять профессиональную деятельность, связанную с транспортом.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/разговор",
    character2: null,
    message: "Среди этого: ремонт и обслуживание двигателей, шасси и электронных систем автомобилей.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/разговор",
    character2: null,
    message: "А, точно! Забыл упомянуть проведение кузовного ремонта.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/разговор",
    character2: null,
    message: "Кстати говоря, немалое внимание уделяют и обучению студентов организации процессов по ремонту, обслуживанию и модернизации автомобилей.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/разговор",
    character2: null,
    message: "В общем, работа не из легких, но весьма увлекательная и того стоит.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/разговор",
    character2: null,
    message: "Наши выпускники часто устраиваются на работу в престижные места.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/приветствие+разговор",
    character2: null,
    message: "Хотелось бы верить, что и ты в будущем станешь одним из наших выпускников-специалистов!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Механика/приветствие+разговор",
    character2: null,
    message: "На этом я попрощаюсь с тобой, дружище. Нужно пообщаться и с другими абитуриентами. До встречи!",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);

//Коммерция
scenes.push(
  {
    name: "Коммерция",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Отличный выбор! Передаю тебя в надежные руки своего коллеги. Еще увидимся!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/приветствие+разговор",
    character2: null,
    message: "Приветсвую, дорогой абитуриент!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/разговор",
    character2: null,
    message: "Дайте угадаю, вы пришли ко мне, чтобы узнать о специальности Коммерция?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/приветствие+разговор",
    character2: null,
    message: "Я с удовольствием расскажу вам о преимуществах нашей специальности.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/разговор",
    character2: null,
    message: "Наснем с того, что мы обучаем специалистов по организации процессов, связанных с куплей-продажей, обменом и продвижением товаров от производителей к потребителям с целью удовлетворения покупательского спроса и получения прибыли.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/разговор",
    character2: null,
    message: "Проще говоря, наша задача - продавать.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/разговор",
    character2: null,
    message: "Студентов учат: договариваться с бизнес-партнерами, разбираться в материальных, финансовых и трудовых ресурсах компании, рассчитывать по общепринятым стандартам цены, з/п и др. экономические показатели, распределять товарные потоки и запасы, управлять движением товаров",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/разговор",
    character2: null,
    message: "Очень важно уметь договариваться с людьми, а еще лучше - влиять на их решения. Ну, и конечно, хорошо считать тоже не помешает.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/приветствие+разговор",
    character2: null,
    message: "Очевидно, что специальность очень актуальна! ",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/разговор",
    character2: null,
    message: "Весь наш мир соткан из взаимодействия между людьми. Товарно-денежные отношения одни из самых влиятельных и распространенных.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/отрицание",
    character2: null,
    message: "Хотя, я ни в коем случае не стараюсь вас убедить.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/приветствие+разговор",
    character2: null,
    message: "Решение только за вами. Но знайте, что я буду очень вас ждать именно на нешем направлении.",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "Коммерция/приветствие+разговор",
    character2: null,
    message: "Желаю удачи и до новых встреч!",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Абитуриент! Закончил ознакомление со специальностями?",
    choices: null
  }
);
scenes.push(
  {
    name: "",
    background: "first",
    character1: "ВГУЭС/разговор",
    character2: null,
    message: "Может быть, тебя интересует еще какое-нибудь направление?",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/спокойствие",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Да, я хочу узнать о другом направлении.",
        scene: "Выбор направления"
      },
      {
        message: "Нет, я узнал все, что хотел.",
        scene: "Прощание"
      }
    )
  }
);


//Прощание
scenes.push(
  {
    name: "Прощание",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Надеюсь, мы смогли помочь тебе с выбором!",
    choices: null
  }
);
scenes.push(
  {
    name: " ",
    background: "first",
    character1: "ВГУЭС/приветствие+разговор",
    character2: null,
    message: "Удачи в поступлении! Буду рад увидеть тебя в стенах нашего учебного заведения. Хорошего дня.",
    choices: null
  }
);

scenes.push(
  {
    name: "Конец",
    background: "graynd",
    character1: "null",
    character2: null,
    message: null,
    choices: Array(
      {
        message: "Начать игру заново?",
        scene: "Приветствие"
      }
    )
  }
);