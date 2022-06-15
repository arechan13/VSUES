let music = $("#mus");
let musicBtn = $("#music-mute");

musicBtn.on("click", ()=>{
  music[0].muted = !music[0].muted;
})

let gameContainer = $("div#game");

let choiceBox = $("#choice-box");

let messageBox = $("#message-box");
messageBox.on("click", { next : true }, NextScene);
$("img#next-arr").on("click", { next : true }, NextScene);
$("img#back-arr").on("click", { next : false }, NextScene);

let characterImages = Array();
characterImages.push($("#character-image1"));
characterImages.push($("#character-image2"));

let currentScene = 0;

let choices = Array();

function SetBackground(background) {
  gameContainer.css("background-image", 'url("assets/images/game/backgrounds/' + background +'.jpg")')
}

function SetCharacter(id, character) {
  if (character != null) {
    characterImages[id].attr("src", "assets/images/game/characters/" + character + ".gif");
  }
}

function SetMessage(message) {
  if (message != null) {
    choiceBox.hide();
    messageBox.show();
    messageBox.text(message);
    $("img#next-arr").show();
    $("img#back-arr").show();
  }
  else {
    choiceBox.show();
    messageBox.text("");
    messageBox.hide();
    if (scenes[currentScene].name == "Начало") {
      if (scene.choices != null) {
      for (let i = 0; i < scene.choices.length; i++) {
      CreateChoice(scene.choices[i].message, scene.choices[i].scene);
      }
    }
    }
  }
}

function CreateChoice(message, nextScene) {
  let choiceElement = "<div class='choice'>" + message + "</div>";
  choiceBox.append(choiceElement);
  choices.push($(".choice")[choices.length]);
  $(choices[choices.length - 1]).on("click", { name : nextScene }, ChangeScene);
}

function NextScene(event) {
  if (event.data.next) {
    currentScene++;
  }
  else {
    currentScene--;
  }

  let scene = scenes[currentScene];
  SetBackground(scene.background);
  SetCharacter(0, scene.character1);
  SetCharacter(1, scene.character2);
  SetMessage(scene.message);
  choices.forEach((choice)=>choice.remove());
  choices = [];
  if (scene.choices != null) {
    for (let i = 0; i < scene.choices.length; i++) {
      CreateChoice(scene.choices[i].message, scene.choices[i].scene);
    }
  }
}

function ChangeScene(event)
{
  if (currentScene == 0)
  {
    music[0].play();
  }
  choices.forEach((choice)=>choice.remove());
  choices = [];
  currentScene = scenes.findIndex((scene)=>scene.name == event.data.name);
  let scene = scenes.find((scene)=>scene.name == event.data.name);
  SetBackground(scene.background);
  SetCharacter(0, scene.character1);
  SetCharacter(1, scene.character2);
  SetMessage(scene.message);
  if (scene.name != "Начало") {
    if (scene.choices != null) {
    for (let i = 0; i < scene.choices.length; i++) {
      CreateChoice(scene.choices[i].message, scene.choices[i].scene);
    }
    }
  }
}