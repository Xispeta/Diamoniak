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
let tabPlayer1CastleSelec2;

let tabPlayer2CastleSelec;
let tabPlayer2CastleSelec2;

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

let winner = false;
let loop = false;

document.getElementById('butPla1').disabled = true;
document.getElementById('butPla2').disabled = true;

function renderItem(cardsP) {
  const tr1 = document.createElement('tr');
  const td1 = document.createElement('td');

  switch (cardsP.valueCard) {
    case 0:
    case 1:
    case 2:
      td1.innerHTML = cardsP.imageCard;
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
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 31:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 32:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 33:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 34:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 35:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 36:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 37:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 38:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 39:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 40:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 41:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 42:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 43:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 44:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 45:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 46:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 47:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 48:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 49:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 50:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 51:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 52:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 53:
      td1.innerHTML = cardsP.imageCard;
      tr1.appendChild(td1);
      break;
    case 54:
      td1.innerHTML = cardsP.imageCard;
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
  tabPlayer1CastleSelec2.textContent='';

  tabPlayer2CastleSelec.textContent = '';
  tabPlayer2CastleSelec2.textContent='';

  tabPlayer1ResC.textContent = '';
  tabPlayer2ResC.textContent = '';

  tabPlayer1Diamond.append(...cardsPlay1Diamond.map(renderItem));
  tabPlayer2Diamond.append(...cardsPlay2Diamond.map(renderItem));

  tabPlayer1Fairy.append(...cardsPlay1Fairy.map(renderItem));
  tabPlayer2Fairy.append(...cardsPlay2Fairy.map(renderItem));

  tabPlayer1CastleSelec.append(...cardsPlay1CastleSel.filter((cardsPlay1CastleSel)=>cardsPlay1CastleSel.position<4).map(renderItem));
  tabPlayer2CastleSelec.append(...cardsPlay2CastleSel.filter((cardsPlay2CastleSel)=>cardsPlay2CastleSel.position<4).map(renderItem));

  tabPlayer1CastleSelec2.append(...cardsPlay1CastleSel.filter((cardsPlay1CastleSel)=>cardsPlay1CastleSel.position>3).map(renderItem));
  tabPlayer2CastleSelec2.append(...cardsPlay2CastleSel.filter((cardsPlay2CastleSel)=>cardsPlay2CastleSel.position>3).map(renderItem));

  tabPlayer1ResC.append(...cardsPlay1RestCastle.map(renderItem));
  tabPlayer2ResC.append(...cardsPlay2RestCastle.map(renderItem));
}

function startPlay(event) {
  let contNumCards = 55;
  cont = 0;
  winner = false;
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
  document.getElementById('butPla2').disabled = true;

  cards = shufflingCards(contNumCards);
  render();
}
function selectCard1(event) {
  event.preventDefault();
  let stealCastle = new Array();
  let idx = cardsPlay2RestCastle
    .map((castle) => castle.color)
    .indexOf(colorCastlePlay1Selec);

  if (cardsPlay1CastleSel.length === 0) {
    castSelectPlay1 = false;
    colorCastlePlay1Selec = '';
  }
  //Comprobamos si tenemos más de dos diamantes
  //Si el castillo que estamos construyendo coindice con una de las cartas
  //que sobran del Jugador 2 intercambiamos tres diamantes por una carta castillo
  if (cardsPlay1Diamond.length > 2 && idx !== -1) {
    let messageDiamond = window.alert(
      `Jugador1: Tienes tres diamantes puedes robarle un castillo de color ${colorCastlePlay1Selec} al Jugador2`,
    );
    //Le robo al jugador1 una del castillo que estoy constuyendo
    stealCastle = cardsPlay2RestCastle.splice(idx, 1);
    cardsPlay1CastleSel.push(...stealCastle);
    cardsPlay1CastleSel.sort((a, b) => a.position - b.position);

    restCardsPlayers = restCardsPlayers.concat(cardsPlay1Diamond.splice(0, 3));
    cardsPlay1Diamond.splice(0, '');

    if (cardsPlay1CastleSel.length === 6) {
      winner = true;
      let messageWinPlay1 = window.alert('Jugador1: Has ganado');
    }
  } else {
    if (cards.size === 0) {
      
      cards = shufflingCards(restCardsPlayers.length);
      cont = 0;
    }
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
        
        let messageWitch = window.alert('Jugador1: Has seleccionada una bruja');
        restCardsPlayers = restCardsPlayers.concat(cards.get(cont));
        if (cardsPlay1Fairy.length > 0) {
          restCardsPlayers.push(...cardsPlay1Fairy.splice(0, 1));
          /*restCardsPlayers = restCardsPlayers.concat(
            cardsPlay1Fairy.splice(0, 1),
          );*/
        } else {
          cardWitch1();
        }
        break;
      }
      case 'castle': {
        console.log('entro en switch castle Jugador2');

        if (colorCastlePlay2Selec !== cards.get(cont).color) {
          if (!castSelectPlay1) {
            castSelectPlay1 = true;
            colorCastlePlay1Selec = cards.get(cont).color;
            cardsPlay1CastleSel.push(cards.get(cont));
            cardsPlay1CastleSel.sort((a, b) => a.position - b.position);
          } else if (cards.get(cont).color === colorCastlePlay1Selec) {
            cardsPlay1CastleSel.push(cards.get(cont));
            cardsPlay1CastleSel.sort((a, b) => a.position - b.position);
            if (cardsPlay1CastleSel.length === 6) {
              winner = true;
              let messageWinPlay1 = window.alert('Jugador1: Has ganado');
            }
          } else {
            cardsPlay1RestCastle.push(cards.get(cont));
            cardsPlay1RestCastle.sort((a, b) => a.position - b.position);
          }
        } else {
          cardsPlay1RestCastle.push(cards.get(cont));
          cardsPlay1RestCastle.sort((a, b) => a.position - b.position);
        }
        cardsPlay1.push(cards.get(cont));
        break;
      }
    }

    cards.delete(cont);
    cont++;
  }
  render();
  if (winner) {
    document.getElementById('butPla2').disabled = true;
    document.getElementById('butPla1').disabled = true;
  } else {
    document.getElementById('butPla1').disabled = true;
    document.getElementById('butPla2').disabled = false;
  }
}

function selectCard2(event) {
  event.preventDefault();
  let stealCastle = new Array();
  let idx = cardsPlay1RestCastle
    .map((castle) => castle.color)
    .indexOf(colorCastlePlay2Selec);

  if (cardsPlay2CastleSel.length === 0) {
    castSelectPlay2 = false;
    colorCastlePlay2Selec = '';
  }
  //Comprobamos si tenemos más de dos diamantes
  //Si el castillo que estamos construyendo coindice con una de las cartas
  //que sobran del Jugador 1 intercambiamos tres diamantes por una carta castillo

  if (cardsPlay2Diamond.length > 2 && idx !== -1) {
    let messageDiamond = window.alert(
      `Jugador2: Tienes tres diamantes puedes robarle un castillo de color ${colorCastlePlay2Selec} al Jugador1`,
    );
    //Le robo al jugador1 una del castillo que estoy constuyendo
    stealCastle = cardsPlay1RestCastle.splice(idx, 1);
    
    cardsPlay2CastleSel.push(...stealCastle);
    cardsPlay2CastleSel.sort((a, b) => a.position - b.position);
    //restCardsPlayers = restCardsPlayers.concat = cardsPlay2Diamond.splice(0, 3);
    restCardsPlayers = restCardsPlayers.concat(cardsPlay2Diamond.splice(0, 3));
    cardsPlay2Diamond.splice(0, '');

    if (cardsPlay2CastleSel.length === 6) {
      winner = true;
      let messageWinPlay1 = window.alert('Jugador2: Has ganado');
      document.getElementById('butPla1').disabled = true;
    }
  } else {
    if (cards.size === 0) {
      
      cards = shufflingCards(restCardsPlayers.length);
      cont = 0;
      //randomCards(restCardsPlayers);
    }
    
    if (cards.get(cont).name === 'undefined') {
      
    }
    switch (cards.get(cont).name) {
      case 'diamond': {
        cardsPlay2Diamond.push(cards.get(cont));
        break;
      }
      case 'fairy': {
        
        cardsPlay2Fairy.push(cards.get(cont));
        break;
      }
      case 'witch': {
        //pushCardCont = true;
        let messageWitch = window.alert('Jugador2: Has seleccionada una bruja');
        restCardsPlayers = restCardsPlayers.concat(cards.get(cont));
        if (cardsPlay2Fairy.length > 0) {
          /*restCardsPlayers = restCardsPlayers.concat = cardsPlay2Fairy.splice(
            0,
            1,
          );*/
          restCardsPlayers.push(...cardsPlay2Fairy.splice(0, 1));
          /*restCardsPlayers = restCardsPlayers.concat(
            cardsPlay2Fairy.splice(0, 1),
          );*/
        } else {
          cardWitch();
        }
        break;
      }
      case 'castle': {
        console.log('entro en switch castle Jugador1');
        if (colorCastlePlay1Selec !== cards.get(cont).color) {
          if (!castSelectPlay2) {
            castSelectPlay2 = true;
            colorCastlePlay2Selec = cards.get(cont).color;
            cardsPlay2CastleSel.push(cards.get(cont));
            cardsPlay2CastleSel.sort((a, b) => a.position - b.position);
            console.log(
              'color del Castillo seleccionada jugador2 ' +
                colorCastlePlay2Selec,
            );
          } else if (cards.get(cont).color === colorCastlePlay2Selec) {
            cardsPlay2CastleSel.push(cards.get(cont));
            cardsPlay2CastleSel.sort((a, b) => a.position - b.position);
            if (cardsPlay2CastleSel.length === 6) {
              winner = true;
              let messageWinPlay1 = window.alert('Jugador2: Has ganado');
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
  }
  render();
  if (winner) {
    document.getElementById('butPla1').disabled = true;
    document.getElementById('butPla2').disabled = true;
  } else {
    document.getElementById('butPla1').disabled = false;
    document.getElementById('butPla2').disabled = true;
  }
}
function cardWitch() {
  let cardsTe = new Array();
  console.log('es una bruja ' + cards.get(cont).name);

  console.log('jugardor 2 has encontrado una bruja');
  cardsTe = new Array(
    ...cardsPlay2RestCastle,
    ...cardsPlay2Diamond,
    ...cardsPlay2CastleSel,
  );

  
  if (cardsTe.length > 2) {
    restCardsPlayers = restCardsPlayers.concat(cardsTe.splice(0, 3));
  } else {
    switch (cardsTe.length) {
      case 2: {
        restCardsPlayers = restCardsPlayers.concat(cardsTe.splice(0, 2));
        break;
      }
      case 1: {
        restCardsPlayers = restCardsPlayers.concat(cardsTe.splice(0, 1));
        break;
      }
    }
  }
  
  cardsPlay2Diamond = cardsTe.filter((element) => element.name === 'diamond');
  cardsPlay2CastleSel = cardsTe.filter(
    (element) =>
      element instanceof Castle && element.color === colorCastlePlay2Selec,
  );
  cardsPlay2CastleSel.sort((a, b) => a.position - b.position);
  cardsPlay2RestCastle = cardsTe.filter(
    (element) =>
      element instanceof Castle && element.color !== colorCastlePlay2Selec,
  );

  cardsPlay2 = new Array(
    ...cardsPlay2Fairy,
    ...cardsPlay2RestCastle,
    ...cardsPlay2Diamond,
    ...cardsPlay2CastleSel,
  );
  cardsPlay2.splice(0, '');
}

function cardWitch1() {
  let cardsTe = new Array();
  console.log('es una bruja ' + cards.get(cont).name);

  console.log('jugardor 1 has encontrado una bruja');
  cardsTe = new Array(
    ...cardsPlay1RestCastle,
    ...cardsPlay1Diamond,
    ...cardsPlay1CastleSel,
  );

  
  if (cardsTe.length > 2) {
    restCardsPlayers = restCardsPlayers.concat(
      (restCardsPlayers = cardsTe.splice(0, 3)),
    );
  } else {
    switch (cardsTe.length) {
      case 2: {
        restCardsPlayers = restCardsPlayers.concat(cardsTe.splice(0, 2));
        break;
      }
      case 1: {
        restCardsPlayers = restCardsPlayers.concat(cardsTe.splice(0, 1));
        break;
      }
    }
  }
  
  cardsPlay1Diamond = cardsTe.filter((element) => element.name === 'diamond');
  cardsPlay1CastleSel = cardsTe.filter(
    (element) =>
      element instanceof Castle && element.color === colorCastlePlay1Selec,
  );
  cardsPlay1CastleSel.sort((a, b) => a.position - b.position);
  cardsPlay1RestCastle = cardsTe.filter(
    (element) =>
      element instanceof Castle && element.color !== colorCastlePlay1Selec,
  );

  cardsPlay1 = new Array(
    ...cardsPlay2Fairy,
    ...cardsPlay2RestCastle,
    ...cardsPlay2Diamond,
    ...cardsPlay2CastleSel,
  );
  cardsPlay1.splice(0, '');
}

document.addEventListener('DOMContentLoaded', function () {
  tabPlayer1CastleSelec = document.getElementById('table1');
  tabPlayer1CastleSelec2=document.getElementById('table1_2');
  tabPlayer1Diamond = document.getElementById('table2');
  tabPlayer1Fairy = document.getElementById('table3');
  tabPlayer1ResC = document.getElementById('table4');

  tabPlayer2CastleSelec = document.getElementById('table5');
  tabPlayer2CastleSelec2=document.getElementById('table5_2');
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
function randomCards(contC) {
  
  let j = 0;
  let min = 0;
  let orderCard = new Array();
  for (let i = 0; i < contC; i++) {
    let numValueCard = Math.floor(Math.random() * (contC - min)) + min;
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

//let arrayCard;

function addCards() {
  castSelectPlay1 = false;
  let arrayCard = new Array();
  let j = 0;
  for (let i = 0; i < 3; i++) {
    arrayCard[j] = new Fairy('fairy', j, '<img src="/dist/Hada.png"/>');
    j++;
  }

  for (let i = 0; i < 8; i++) {
    arrayCard[j] = new Witch('witch', j, `imageWitch${j}`);
    j++;
  }
  for (let i = 0; i < 20; i++) {
    arrayCard[j] = new Diamond('diamond', j, '<img src="/dist/diamante.png"/>');
    j++;
  }
  for (let i = 0; i < 6; i++) {
    arrayCard[j] = new Castle(
      'castle',
      j,
      `<img src="/dist/castillorosa${i + 1}.png"/>`,
      'pink',
      i + 1,
    );
    j++;
  }
  for (let i = 0; i < 6; i++) {
    arrayCard[j] = new Castle(
      'castle',
      j,
      `<img src="/dist/castilloazul${i + 1}.png"/>`,
      'blue',
      i + 1,
    );
    j++;
  }
  for (let i = 0; i < 6; i++) {
    arrayCard[j] = new Castle(
      'castle',
      j,
      `<img src="/dist/castilloverde${i + 1}.png"/>`,
      'green',
      i + 1,
    );
    j++;
  }
  for (let i = 0; i < 6; i++) {
    arrayCard[j] = new Castle(
      'castle',
      j,
      `<img src="/dist/castilloamarillo${i + 1}.png"/>`,
      'yellow',
      i + 1,
    );
    j++;
  }
  return arrayCard;
}

//Empieza el Juego y mezcalmos las cartas
function shufflingCards(contNumCards) {
  
  let arrCard = new Array();
  let shufflingC = new Map();
  let ranC = randomCards(contNumCards);
  //Resto de rondas
  if (contNumCards < 55) {
    
    arrCard = restCardsPlayers;
    //Primera ronda
  } else {
    arrCard = addCards();
  }
  for (let i = 0; i < ranC.length; i++) {
    shufflingC.set(i, arrCard[ranC[i]]);
  }
  return shufflingC;
}
