let testContainer = $("div#test");

let choiceBox = $("#choice-box");
let messageBox = $("#message-box");
messageBox.on("click", NextScene);

let choices = Array();
let currentQuestion = 0;

//========== категории ==========
let crit1 = 0;
let crit2 = 0;
let crit3 = 0;
let crit4 = 0;
let crit5 = 0;

function SetMessage(message) {
	if (currentQuestion == questions.length)
	{
	  alert("Человек - Человек: " + crit1 + "\nПрофессии типа Человек - Человек. К данному типу относятся профессии, основное направление которых связано с общением между людьми и их взаимном влиянии. \nЕсли у вас больше всего баллов в этой категории, вам подойдут следующие наши специальности: Дошкольное образование, Преподавание в начальных классах, Право и организация социального обеспечения, Гостиничное дело, Реклама, Коммерция.\n" + "\nЧеловек - Природа: " + crit2 + "\nПрофессии типа Человек - Природа. Сфера деятельности данного типа направлена на окружающую нас природу. Это такие профессии как ветеринар, эколог, агроном, геолог, микробиолог. \nВ нашем филиале, к сожалению, специальности данной категории отсутствуют.\n" + "\nЧеловек - Техника: " + crit3 + "\nПрофессии типа Человек - Техника. Профессии данного типа направлены на эксплуатацию различных технических устройств и приборов, их обслуживание и создание. \nЕсли у вас больше всего баллов в этой категории, вам подойдут следующие наши специальности: Сетевое и системное администрирование, Информационные системы и программирование, Техническое обслуживание и ремонт двигателей и агрегатов автомобилей.\n" + "\nЧеловек - Знаковая система: " + crit4 + "\nПрофессии типа Человек - Знаковая система. Основным направление деятельности данного типа профессий является работа с цифрами, формулами, расчетами, текстами, базами данных. \nЕсли у вас больше всего баллов в этой категории, вам подойдут следующие наши специальности: Организация перевозок и управление на траспорте, Банковское дело, Экономика и бухгалтерский учет.\n" + "\nЧеловек - Художественные образы: " + crit5 + "\nПрофессии типа Человек - Художественные образы. Профессии этого типа направлены на создание, восстановление и модернизацию различных произведений культуры и искусства. \nЕсли у вас больше всего баллов в этой категории, вам подойдут следующие наши специальности: Строительство и эксплуатация зданий и сооружений.");
	  currentQuestion = 0;
	  question = questions[currentQuestion];
	  SetMessage(question.message);

    crit1 = 0;
    crit2 = 0;
    crit3 = 0;
    crit4 = 0;
    crit5 = 0;
	}
	else
	{  messageBox.text(message);
	  question = questions[currentQuestion];
	  if (question.choices != null) {
		for (let i = 0; i < question.choices.length; i++) {
		  CreateChoice(question.choices[i].message, question.choices[i].type);
		}
		}
	}
	}

  
  function CreateChoice(message, type) {
  let choiceElement = "<div class='choice'>" + message + "</div>";
  choiceBox.append(choiceElement);
  choices.push($(".choice")[choices.length]);
  $(choices[choices.length - 1]).on("click", { type : type }, ChangeScene);
  }
  
  function NextScene() {
  currentQuestion++;
  question = questions[currentQuestion];
  SetMessage(question.message);
  }
  
  function ChangeScene(event) {
  currentQuestion++;
  question = questions[currentQuestion];
  choices.forEach((choice)=>choice.remove());
  choices = [];

  switch (event.data.type) {
    case 1:
      crit1++;
      break;
    case 2:
      crit2++;
      break;
    case 3:
      crit3++;
      break;
    case 4:
      crit4++;
      break;
    case 5:
	    crit5++;
      break;
  }

  if (question != undefined)
  {
    SetMessage(question.message);
  }
  else
  {
    SetMessage("");
  }
  }