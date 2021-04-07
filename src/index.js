/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//Variable global que contiene todas las cartas en la primera ronda
//y las restantes de cada ronda
'use strict';

//Modelo
class Card {
  constructor(name, valueCard) {
    this.name = name;
    this.valueCard = valueCard;
  }
}
//Valores del 0 al 2
class Fairy extends Card {
  constructor(name, valueCard, imageCard) {
    super(name, valueCard);
    this.imageCard = imageCard;
  }
}
//Valores del 3 al 10
class Witch extends Card {
  constructor(name, valueCard, imageCard) {
    super(name, valueCard);
    this.imageCard = imageCard;
  }
}
//Valores del 11 al 30
class Diamond extends Card {
  constructor(name, valueCard, imageCard) {
    super(name, valueCard);
    this.imageCard = imageCard;
  }
}
//Valores del 31 al 54
class Castle extends Card {
  constructor(name, valueCard, imageCard, color, position, completed) {
    super(name, valueCard);
    this.imageCard = imageCard;
    this.color = color;
    this.position = position;
    this.completed = completed;
  }
}

class Player {
  constructor(name, age, winner) {
    this.name = name;
    this.age = age;
    this.winner = winner;
  }
}

let tabPlayer1Diamond;
let tabPlayer2Diamond;

let tabPlayer1Fairy;
let tabPlayer2Fairy;

let tabPlayer1CastleSelec;
let tabPlayer2CastleSelec;

let tabPlayer1ResC;
let tabPlayer2ResC;

let cards = new Map();

let cardsPlay1 = new Array();
let cardsPlay2 = new Array();

let cardsPlay1Diamond = new Array();
let cardsPlay2Diamond = new Array();

let cardsPlay1Fairy = new Array();
let cardsPlay2Fairy = new Array();

let cardsPlay1CastleSel = new Array();
let cardsPlay2CastleSel = new Array();

let cardsPlay1RestCastle = new Array();
let cardsPlay2RestCastle = new Array();

let colorCastlePlay1Selec = '';
let colorCastlePlay2Selec = '';

let cont = 0;
let restCardsPlayers = new Array();

let castSelectPlay1 = false;
let castSelectPlay2 = false;

document.getElementById('butPla1').disabled = true;
document.getElementById('butPla2').disabled = true;

let contrucCastle = false;

function renderItem(cardsP, index) {
  const tr1 = document.createElement('tr');
  const td1 = document.createElement('td');

  switch (cardsP.valueCard) {
    case 0:
    case 1:
    case 2:
      td1.innerHTML = '<img src="/dist/Hada.png"/>';
      tr1.appendChild(td1);
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      td1.innerHTML = '<img src="/dist/bruja.png"/>';
      tr1.appendChild(td1);
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
      td1.innerHTML = '<img src="/dist/diamante.png"/>';
      tr1.appendChild(td1);
      break;
    case 31:
      td1.innerHTML = '<img src="/dist/castillorosa1.jpg"/>';
      tr1.appendChild(td1);
      break;
    case 32:
      td1.innerHTML = '<img src="/dist/castillorosa2.jpg"/>';
      tr1.appendChild(td1);
      break;
    case 33:
      td1.innerHTML = '<img src="/dist/castillorosa3.jpg"/>';
      tr1.appendChild(td1);
      break;
    case 34:
      td1.innerHTML = '<img src="/dist/castillorosa4.jpg"/>';
      tr1.appendChild(td1);
      break;
    case 35:
      td1.innerHTML = '<img src="/dist/castillorosa5.jpg"/>';
      tr1.appendChild(td1);
      break;
    case 36:
      td1.innerHTML = '<img src="/dist/castillorosa6.jpg"/>';
      tr1.appendChild(td1);
      break;
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
      break;
    case 43:
      td1.innerHTML = '<img src="/dist/castilloverde1.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 44:
      td1.innerHTML = '<img src="/dist/castilloverde2.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 45:
      td1.innerHTML = '<img src="/dist/castilloverde3.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 46:
      td1.innerHTML = '<img src="/dist/castilloverde4.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 47:
      td1.innerHTML = '<img src="/dist/castilloverde5.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 48:
      td1.innerHTML = '<img src="/dist/castilloverde6.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 49:
      td1.innerHTML = '<img src="/dist/castilloamarillo1.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 50:
      td1.innerHTML = '<img src="/dist/castilloamarillo2.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 51:
      td1.innerHTML = '<img src="/dist/castilloamarillo3.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 52:
      td1.innerHTML = '<img src="/dist/castilloamarillo4.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 53:
      td1.innerHTML = '<img src="/dist/castilloamarillo5.jpeg"/>';
      tr1.appendChild(td1);
      break;
    case 54:
      td1.innerHTML = '<img src="/dist/castilloamarillo6.jpeg"/>';
      tr1.appendChild(td1);
      break;
  }
  return tr1;
}

function render() {
  tabPlayer1Diamond.textContent = '';
  tabPlayer2Diamond.textContent = '';

  tabPlayer1Fairy.textContent = '';
  tabPlayer2Fairy.textContent = '';

  tabPlayer1CastleSelec.textContent = '';
  tabPlayer2CastleSelec.textContent = '';

  tabPlayer1ResC.textContent = '';
  tabPlayer2ResC.textContent = '';

  tabPlayer1Diamond.append(...cardsPlay1Diamond.map(renderItem));
  tabPlayer2Diamond.append(...cardsPlay2Diamond.map(renderItem));

  tabPlayer1Fairy.append(...cardsPlay1Fairy.map(renderItem));
  tabPlayer2Fairy.append(...cardsPlay2Fairy.map(renderItem));

  tabPlayer1CastleSelec.append(...cardsPlay1CastleSel.map(renderItem));
  tabPlayer2CastleSelec.append(...cardsPlay2CastleSel.map(renderItem));

  tabPlayer1ResC.append(...cardsPlay1RestCastle.map(renderItem));
  tabPlayer2ResC.append(...cardsPlay2RestCastle.map(renderItem));
}

function startPlay(event) {
  cardsPlay1 = [];
  cardsPlay2 = [];

  cardsPlay1Fairy = [];
  cardsPlay2Fairy = [];

  cardsPlay1Diamond = [];
  cardsPlay2Diamond = [];

  cardsPlay1CastleSel = [];
  cardsPlay2CastleSel = [];

  cardsPlay1RestCastle = [];
  cardsPlay2RestCastle = [];

  castSelectPlay1 = false;
  castSelectPlay2 = false;

  colorCastlePlay1Selec = '';
  colorCastlePlay2Selec = '';

  restCardsPlayers = [];

  event.preventDefault();

  document.getElementById('butPla1').disabled = false;

  cards = shufflingCards();
  render();
}
function selectCard1(event) {
  event.preventDefault();

  switch (cards.get(cont).name) {
    case 'diamond': {
      cardsPlay1Diamond.push(cards.get(cont));
      break;
    }
    case 'fairy': {
      cardsPlay1Fairy.push(cards.get(cont));
      break;
    }
    case 'witch': {
      break;
    }
    case 'castle': {
      console.log('entro en switch castle Jugador2');
      if (colorCastlePlay2Selec !== cards.get(cont)) {
        if (!castSelectPlay1) {
          castSelectPlay1 = true;
          colorCastlePlay1Selec = cards.get(cont).color;
          cardsPlay1CastleSel.push(cards.get(cont));
          cardsPlay1CastleSel.sort((a, b) => a.position - b.position);
          console.log(
            'color del Castillo seleccionada jugador 1 ' +
              colorCastlePlay1Selec,
          );
        } else if (cards.get(cont).color === colorCastlePlay1Selec) {
          cardsPlay1CastleSel.push(cards.get(cont));
          cardsPlay1CastleSel.sort((a, b) => a.position - b.position);
        } else {
          cardsPlay1RestCastle.push(cards.get(cont));
          cardsPlay1RestCastle.sort((a, b) => a.position - b.position);
        }
      } else {
        cardsPlay1RestCastle.push(cards.get(cont));
        cardsPlay1RestCastle.sort((a, b) => a.position - b.position);
      }
      break;
    }
  }

  cards.delete(cont);
  cont++;
  render();
  //Activación Desactivación de los botones
  document.getElementById('butPla2').disabled = false;
  document.getElementById('butPla1').disabled = true;
}

function selectCard2(event) {
  event.preventDefault();
  //let pushCardCont = false;

  switch (cards.get(cont).name) {
    case 'diamond': {
      cardsPlay2Diamond.push(cards.get(cont));      
        if(cardsPlay1RestCastle.indexOf.color === colorCastlePlay1Selec)      
        cardDiamond();      
      break;
    }
    case 'fairy': {
      cardsPlay2Fairy.push(cards.get(cont));
      break;
    }
    case 'witch': {
      //pushCardCont = true;
      restCardsPlayers = restCardsPlayers.concat(cards.get(cont));
      cardWitch();
      break;
    }
    case 'castle': {
      console.log('entro en switch castle Jugador1');
      if (colorCastlePlay1Selec !== cards.get(cont)) {
        if (!castSelectPlay2) {
          castSelectPlay2 = true;
          colorCastlePlay2Selec = cards.get(cont).color;
          cardsPlay2CastleSel.push(cards.get(cont));
          cardsPlay2CastleSel.sort((a, b) => a.position - b.position);
          console.log(
            'color del Castillo seleccionada jugador2 ' + colorCastlePlay2Selec,
          );
        } else if (cards.get(cont).color === colorCastlePlay2Selec) {
          cardsPlay2CastleSel.push(cards.get(cont));
          cardsPlay2CastleSel.sort((a, b) => a.position - b.position);
          if(cardsPlay2CastleSel.length===6){
            let messageWinPlay1 = window.prompt('Jugador2: Ha ganado');
            document.getElementById('butPla2').disabled = false;
            document.getElementById('butPla1').disabled = false;
          }
        } else {
          cardsPlay2RestCastle.push(cards.get(cont));
          cardsPlay2RestCastle.sort((a, b) => a.position - b.position);
        }
      } else {
        cardsPlay2RestCastle.push(cards.get(cont));
        cardsPlay2RestCastle.sort((a, b) => a.position - b.position);
      }
      cardsPlay2.push(cards.get(cont));
      break;
    }
  } 

  cards.delete(cont);
  cont++;
  render();
  //Activación desactivación de los Botones
  document.getElementById('butPla2').disabled = true;
  document.getElementById('butPla1').disabled = false;
}

function cardWitch() {
  let cardsTe = new Array();
  let rest = new Array();
  console.log('es una bruja ' + cards.get(cont).name);
  let messageWitch = window.prompt('Jugador2: Has seleccionada una bruja');
  console.log('jugardor 2 ha encontrado una bruja');
  if (cardsPlay2Fairy.length > 0) {
    //restCardsPlayers = cardsPlay2Fairy[0];
    restCardsPlayers = restCardsPlayers.concat = cardsPlay2Fairy.splice(0, 1);
    //cont++;
  } else {
    cardsTe = new Array(
      ...cardsPlay2RestCastle,
      ...cardsPlay2Diamond,
      ...cardsPlay2CastleSel,
    );

    debugger;
    if (cardsTe.length > 2) {
      restCardsPlayers = restCardsPlayers.concat(
        (restCardsPlayers = cardsTe.splice(0, 3)),
      );
    } else {
      switch (cardsTe.length) {
        case 2: {
          restCardsPlayers = restCardsPlayers.concat = cardsTe.splice(0, 2);
          break;
        }
        case 1: {
          restCardsPlayers = restCardsPlayers.concat = cardsTe.splice(0, 1);
          break;
        }
      }
    }
    debugger;
    cardsPlay2Diamond = cardsTe.filter((element) => element.name === 'diamond');
    cardsPlay2CastleSel = cardsTe.filter(
      (element) =>
        element instanceof Castle && element.color === colorCastlePlay2Selec,
    );
    cardsPlay2RestCastle = cardsTe.filter(
      (element) =>
        element instanceof Castle && element.color !== colorCastlePlay2Selec,
    );
  }
  cardsPlay2 = new Array(
    ...cardsPlay2Fairy,
    ...cardsPlay2RestCastle,
    ...cardsPlay2Diamond,
    ...cardsPlay2CastleSel,
  );
  cardsPlay2.splice(0, '');
}

function cardDiamond() {
  debugger;
  let messageDiamond = window.prompt(
    `Jugador2: Tienes tres diamantes puedes robarle un castillo de color ${colorCastlePlay2Selec} al Jugador1`);
    if(cardsPlay2Diamond.length > 2) { 
    //Le robo al jugador1 una del castillo que estoy constuyendo
    cardsPlay2CastleSel.push(cardsPlay1RestCastle.splice(inx, 1));
    restCardsPlayers = restCardsPlayers.concat = cardsPlay2Diamond.splice(0, 1);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  tabPlayer1CastleSelec = document.getElementById('table1');
  tabPlayer1Diamond = document.getElementById('table2');
  tabPlayer1Fairy = document.getElementById('table3');
  tabPlayer1ResC = document.getElementById('table4');

  tabPlayer2CastleSelec = document.getElementById('table5');
  tabPlayer2Diamond = document.getElementById('table6');
  tabPlayer2Fairy = document.getElementById('table7');
  tabPlayer2ResC = document.getElementById('table8');

  document.getElementById('butStart').addEventListener('click', startPlay);
  document.getElementById('butPla1').addEventListener('click', selectCard1);
  document.getElementById('butPla2').addEventListener('click', selectCard2);
  render();
});

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
// Función que devuelve la carta seleccionada al azar - total son 55 cartas
// se cambiara el valor max dependiendo del número de cartas restantes
let max;
let min;
let orderCard;
let j;
function randomCards() {
  j = 0;
  max = 55;
  min = 0;
  orderCard = new Array();
  for (let i = 0; i < 55; i++) {
    let numValueCard = Math.floor(Math.random() * (max - min)) + min;
    if (orderCard.indexOf(numValueCard) != -1) {
      i--;
    } else {
      orderCard[j] = numValueCard;
      j++;
    }
  }
  console.table('Resultado array orderCard ' + orderCard);

  return orderCard;
}

let arrayCard;

function addCards() {
  castSelectPlay1 = false;
  arrayCard = new Array();
  let j = 0;
  for (let i = 0; i < 3; i++) {
    arrayCard[j] = new Fairy('fairy', j, `imageFairy${j}`);
    j++;
  }

  for (let i = 0; i < 8; i++) {
    arrayCard[j] = new Witch('witch', j, `imageWitch${j}`);
    j++;
  }
  for (let i = 0; i < 20; i++) {
    arrayCard[j] = new Diamond('diamond', j, `imageDiamond`);
    j++;
  }
  for (let i = 0; i < 6; i++) {
    arrayCard[j] = new Castle(
      'castle',
      j,
      `imageCastleP${i}`,
      'pink',
      i,
      false,
    );
    j++;
  }
  for (let i = 0; i < 6; i++) {
    arrayCard[j] = new Castle(
      'castle',
      j,
      `imageCastleB${i}`,
      'blue',
      i,
      false,
    );
    j++;
  }
  for (let i = 0; i < 6; i++) {
    arrayCard[j] = new Castle(
      'castle',
      j,
      `imageCastleG${i}`,
      'green',
      i,
      false,
    );
    j++;
  }
  for (let i = 0; i < 6; i++) {
    arrayCard[j] = new Castle(
      'castle',
      j,
      `imageCastleY${i}`,
      'yellow',
      i,
      false,
    );
    j++;
  }
  return arrayCard;
}

//Empieza el Juego y barajamos
let shufflingC;
let arrCard = new Array();
function shufflingCards() {
  shufflingC = new Map();
  let ranC = randomCards();
  let arrCard = addCards();
  for (let i = 0; i < ranC.length; i++) {
    shufflingC.set(i, arrCard[ranC[i]]);
  }
  return shufflingC;
}
