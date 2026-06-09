  
    /* Welcome ! If you opened this file, you are probably curious about the behind-the-scenes of this presentation. 
    While I have some experience with CSS and HTML, JavaScript is definitely outside my comfort zone.
    That said, with basics in C# and Java, many long conversations with Chat, and a LOT of tweaking. 
    This is the result I ended up with.  */

  /* USN LOGO ! */

document.addEventListener('DOMContentLoaded', () => {

  const nameImage = 'intro-img/logo-usn-desktop.svg';
  const nameImageContainer = document.getElementById('name-image-container');

  function showNameImage() {
    if (!nameImageContainer) return;

    nameImageContainer.innerHTML = '';

    const img = document.createElement('img');
    img.src = nameImage;
    img.style.width = "320px";

    nameImageContainer.appendChild(img);
  }

  function showUSNLogo() {

  if (!nameImageContainer) return;

  nameImageContainer.innerHTML = '';

  const img = document.createElement('img');

  img.src = 'intro-img/logo-usn-desktop.svg';

  img.classList.add('usn-logo-animation');

  nameImageContainer.appendChild(img);
}

function hideUSNLogo() {

  if (!nameImageContainer) return;

  nameImageContainer.innerHTML = '';
}

function hideNameImage() {
  if (!nameImageContainer) return;

  nameImageContainer.innerHTML = '';
}

  /* ROBYNE - FROM START TO FINISH */

function showOriginsImages() {

  const french = document.createElement('img');

  french.id = 'rob-french-2';

  french.src = 'rob-img/rob-french-2.png';

  french.style.position = 'fixed';
  french.style.left = '80px';
  french.style.top = '50%';
  french.style.transform = 'translateY(-50%)';
  french.style.width = '400px';
  french.style.zIndex = '2500';

  document.body.appendChild(french);


  const dutch = document.createElement('img');

  dutch.id = 'rob-dutch-2';

  dutch.src = 'rob-img/rob-dutch-2.png';

  dutch.style.position = 'fixed';
  dutch.style.right = '80px';
  dutch.style.top = '50%';
  dutch.style.transform = 'translateY(-50%)';
  dutch.style.width = '400px';
  dutch.style.zIndex = '2500';

  document.body.appendChild(dutch);


  const start = document.createElement('img');

  start.id = 'rob-start-2';

  start.src = 'rob-img/rob-start-2.png';

  start.style.position = 'fixed';
  start.style.left = '30%';
  start.style.top = '20%';
  start.style.transform = 'translateY(-50%)';
  start.style.width = '300px';
  start.style.zIndex = '2500';

  document.body.appendChild(start);

  const final = document.createElement('img');

  final.id = 'rob-final-2';

  final.src = 'rob-img/rob-final-2.png';

  final.style.position = 'fixed';
  final.style.left = '55%';
  final.style.top = '80%';
  final.style.transform = 'translateY(-50%)';
  final.style.width = '300px';
  final.style.zIndex = '2500';

  document.body.appendChild(final);
}

function hideOriginsImages() {

  const french =
    document.getElementById('rob-french-2');

  const dutch =
    document.getElementById('rob-dutch-2');

  const start =
    document.getElementById('rob-start-2');

  const final =
    document.getElementById('rob-final-2');

  if (french) french.remove();

  if (dutch) dutch.remove();

  if (start) start.remove();

  if (final) final.remove();
}

  /* POPUP & AUDIO */


const popup = document.getElementById('popup');

const popupText =
  document.getElementById('popup-text');

const popupBtn =
  document.getElementById('popup-btn');


const playMusicBtn =
  document.getElementById('play-music-btn');

const plasticLoveAudio =
  document.getElementById('plastic-love-audio');


  /* GAMEBOY */

const gameboyContainer =
  document.getElementById('gameboy-container');

const gameboyVideo =
  document.getElementById('gameboy-video');

  const cultureVideoContainer =
  document.getElementById('culture-video-container');

const cultureVideo =
  document.getElementById('culture-video');


  /* JAPAN */

  function showCultureVideo() {

  cultureVideoContainer.classList.remove('hidden');

  cultureVideo.currentTime = 0;
  cultureVideo.play();
}

function hideCultureVideo() {

  cultureVideoContainer.classList.add('hidden');

  cultureVideo.pause();
}

function showGameboy() {

  gameboyContainer.classList.remove('hidden');

  if (gameboyVideo) {
    gameboyVideo.currentTime = 0;
    gameboyVideo.play();
  }
}

function hideGameboy() {

  gameboyContainer.classList.add('hidden');

  if (gameboyVideo) {
    gameboyVideo.pause();
  }
}
  /* PLASTIC LOVE AUDIO */

  playMusicBtn.addEventListener('click', () => {

  if (plasticLoveAudio.paused) {

    plasticLoveAudio.play();

    playMusicBtn.textContent = "⏸ Pause";

  } else {

    plasticLoveAudio.pause();

    playMusicBtn.textContent = "▶ Play";

  }

});


/* DESIGN AROUND THE CLOCK */

const floatingBackground =
  document.getElementById('floating-background');


const japanImages = [
  'illustration-img/illus-1.png',
  'illustration-img/illus-14.png',
  'illustration-img/illus-2.png',
  'illustration-img/illus-15.png',
  'illustration-img/illus-3.png',
  'illustration-img/illus-16.png',
  'illustration-img/illus-4.png',
  'illustration-img/illus-13.png',
  'illustration-img/illus-5.png',
  'illustration-img/illus-6.png',
  'illustration-img/illus-17.png',
  'illustration-img/illus-7.png',
  'illustration-img/illus-8.png',
  'illustration-img/illus-9.png',
  'illustration-img/illus-10.png',
  'illustration-img/illus-11.png',
  'illustration-img/illus-12.png',
  'illustration-img/illus-18.png',
];

  /* USN ! */

const usnApplicationImages = [
  'illustration-img/confetti-1.png',
  'illustration-img/confetti-2.png',
  'illustration-img/confetti-3.png',
  'illustration-img/confetti-4.png',
  'illustration-img/confetti-5.png',
  'illustration-img/confetti-6.png',
  'illustration-img/confetti-7.png',
  'illustration-img/confetti-8.png',
  'illustration-img/confetti-9.png',
  'illustration-img/confetti-10.png',
  'illustration-img/confetti-11.png'
];

function startUSNApplicationAnimation() {

  const imagesToShow = [

    ...usnApplicationImages,
    ...usnApplicationImages,
    ...usnApplicationImages

  ];

  imagesToShow.sort(() => Math.random() - 0.5);

  imagesToShow.forEach((imageSrc, index) => {

    setTimeout(() => {

      const img = document.createElement('img');

      img.classList.add('bg-image');

      img.src = imageSrc;

      const size = 180 + Math.random() * 150;

      img.style.width = size + 'px';
      img.style.height = size + 'px';

      const pos =
        introPositions[index % introPositions.length];

      const randomOffsetX =
        (Math.random() - 0.5) * 120;

      const randomOffsetY =
        (Math.random() - 0.5) * 120;

      img.style.left =
        `calc(${pos.x}% + ${randomOffsetX}px)`;

      img.style.top =
        `calc(${pos.y}% + ${randomOffsetY}px)`;

      floatingBackground.appendChild(img);

      setTimeout(() => {
        img.remove();
      }, 6000);

    }, index * 80);

  });

}

let animationInterval = null;

/* DESIGN AROUND THE CLOCK */

function createFloatingImage() {

  const img = document.createElement('img');

  img.classList.add('bg-image');

  img.src =
    japanImages[
      Math.floor(Math.random() * japanImages.length)
    ];

  const size = 200 + Math.random() * 200;

  img.style.width = size + 'px';

  img.style.height = size + 'px';

  img.style.left =
    Math.random() * window.innerWidth + 'px';

  img.style.top =
    Math.random() * window.innerHeight + 'px';

  floatingBackground.appendChild(img);

  setTimeout(() => {

    img.remove();

  }, 6000);
}

/* DESIGN AROUND THE CLOCK */

function startBackgroundAnimation() {

  const imagesToShow = [

    ...japanImages,

    ...japanImages.slice(0, 6)

  ];

  const cols = 6;
  const rows = 4;

  const cellWidth = window.innerWidth / cols;
  const cellHeight = window.innerHeight / rows;

  imagesToShow.forEach((imageSrc, index) => {

    setTimeout(() => {

      const img = document.createElement('img');

      img.classList.add('bg-image');

      img.src = imageSrc;

      const size = 220;

      img.style.width = size + 'px';
      img.style.height = size + 'px';

      const col = index % cols;
      const row = Math.floor(index / cols);

      img.style.left =
        (col * cellWidth + (cellWidth - size) / 2) + 'px';

      img.style.top =
        (row * cellHeight + (cellHeight - size) / 2) + 'px';

      floatingBackground.appendChild(img);

    }, index * 150);

  });

}

  /* WELCOME ! */

function createIntroImage() {

  const img = document.createElement('img');

  img.classList.add('intro-image');

  img.src =
    introImages[
      Math.floor(Math.random() * introImages.length)
    ];

  const size = 120 + Math.random() * 280;

  img.style.width = size + 'px';

  img.style.left = Math.random() * window.innerWidth + 'px';
  img.style.top = Math.random() * window.innerHeight + 'px';

  floatingBackground.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 2500);
}

const introImages = [
  'intro-img/intro-img-1-opt2.png',
  'intro-img/intro-img-2-opt2.png',
  'intro-img/intro-img-3-opt2.png',
  'intro-img/intro-img-4-opt2.png',
  'intro-img/intro-img-5-opt2.png',
  'intro-img/intro-img-6-opt2.png',
];

const introPositions = [

  { x: 5,  y: 5  },
  { x: 30, y: 10 },
  { x: 60, y: 5  },
  { x: 80, y: 15 },

  { x: 10, y: 35 },
  { x: 40, y: 30 },
  { x: 70, y: 40 },

  { x: 5,  y: 65 },
  { x: 30, y: 75 },
  { x: 55, y: 65 },
  { x: 80, y: 75 },

  { x: 20, y: 50 },
  { x: 50, y: 50 },
  { x: 85, y: 55 },

  { x: 15, y: 85 },
  { x: 45, y: 85 },
  { x: 70, y: 90 },
  { x: 90, y: 85 }

];

function createIntroImage(imageSrc, index) {

  const img = document.createElement('img');

  img.classList.add('intro-image');

  img.src = imageSrc;

  const size = 120 + Math.random() * 180;

  img.style.width = size + 'px';

  const pos = introPositions[index];

  const randomOffsetX = (Math.random() - 0.5) * 120;
  const randomOffsetY = (Math.random() - 0.5) * 120;

  img.style.left =
    `calc(${pos.x}% + ${randomOffsetX}px)`;

  img.style.top =
    `calc(${pos.y}% + ${randomOffsetY}px)`;

  floatingBackground.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 2500);
}


  /* ENDLESS INSPIRATION */

  let creativeQuestElements = [];

const creativeQuestImages = [

  'illustration-img/oil-octopus.png',
  'illustration-img/rob-2.png',
  'illustration-img/kyosai.png',
  'illustration-img/yoasobi.jpg',
  'illustration-img/sign_design.png',
  'illustration-img/rob-4.png',
  'illustration-img/yoshirotten.jpg',
  'illustration-img/2121_moji.jpg',
  'illustration-img/rob-3.png'
];

function createCreativeQuestImage(imageSrc, index) {

  const img = document.createElement('img');

  img.classList.add('creative-quest-image');

  img.src = imageSrc;

  const size = 220;

  img.style.width = size + 'px';

  const position =
    positions[index % positions.length];

  img.style.left = position.left;
  img.style.top = position.top;

  floatingBackground.appendChild(img);

  creativeQuestElements.push(img);

}


function clearCreativeQuestImages() {

  creativeQuestElements.forEach(img => {
    img.remove();
  });

  creativeQuestElements = [];
}

const positions = [

  { left: '5%', top: '10%' },
  { left: '20%', top: '25%' },
  { left: '35%', top: '5%' },
  { left: '70%', top: '15%' },

  { left: '10%', top: '45%' },
  { left: '50%', top: '15%' },
  { left: '75%', top: '50%' },

  { left: '40%', top: '63%' },
  { left: '55%', top: '63%' },
  { left: '60%', top: '80%' }

];

function startCreativeQuestAnimation() {

  const imagesToShow = [];

  creativeQuestImages.forEach(image => {

    imagesToShow.push(image);

  });

imagesToShow.forEach((image, index) => {

  setTimeout(() => {

    createCreativeQuestImage(
      image,
      index
    );

  }, index * 250);

});

}

/* POPUP TEXTS MEMORY CARDS */

const matchMessages = {
  running: "Tennis, badminton, swimming are among the sports I love, with running at the top of the list.\n I started running at the age of 16 and haven't stopped since. \nOften, I let myself get carried away and discover new places. \nUsually, you will find me running in the morning between 10 and 20 km with one goal in mind : the Tokyo Marathon !",
  hokusai: "Hokusai’s work was my very first introduction to Japanese arts when I was 7 during a school trip. \nWhen I got home, I asked my parents if we could go back to the museum which we did a few days later. \nA calligraphy workshop was being held that day, and that's when they realized I was already completely hooked on Japan.",
  sushi: "My all-time favourite food, especially ネギトロ軍艦. \nI usually find myself at a kaiten sushi at least once a week !",
  "japanese-snacks": "Natto, カリカリ梅, おしゃぶりと都こんぶ, 和菓子 are foods I genuinely can’t live without in Japan ! \nTastes that that never fail to bring a smile to the Japanese locals I meet.",
  "plastic-love": "One of my favourite songs ! I love Japanese City Pop from the 80s. It reminds me of the good old days... :)",
  robyne: "People around me know me for my necklace and for never taking off my bucket hat or cap no matter the season or place.\n I finish the look with earrings, black slip-ons shoes and colorful outfits !",
  onihasoto: "The story of two friends : \nAka Oni and Ao Oni. \nThey love to skate during Setsubun, outdoor activities, 恵方巻き and 柊鰯. \nA marchandise brand and a website in the making. \nTo be continued ? ",
  movingout: "Since childhood, I have moved more than 16 times, which gave me the chance to discover many places across France thanks to my parents' jobs.\nSometimes twice a year, school changes included.\nThe longest I stayed in one place was five years, from the age of 11 to 16 in Cannes.\nMy parents have recently moved back to the area, bringing the story full circle !",
  design: "I can spend hours in Book Off searching for any kind of Japanese design-related books. \nOne of my favourite places to visit however is the Aoyama Book Center where there is always new books to discover ! "
};


  /* POPUP TEXTS */

const messages = [

  "Hi,\n welcome ! ",
  
  "My name is Robyne.",

  "The new Creative Intern at USN ! ",

  "I am 23 years old.\n Half French, half Dutch.",

  "Fascinated by Japanese culture for as long as I can remember.",

  "I started my journey with a two-year International Business background focusing on the Japanese market but eventually got drawn into an exciting creative quest after my first introduction to Japan during a university exchange at Kyoto Gaidai in 2023 !",

  "Japanese graphic design, packaging, arts... lit a spark in me.",

  "From that moment on,\n I decided to pursue studies centered around communication and design.",
  
  "And started experimenting and designing around the clock with Japan in mind.",

  "In 2024,\n I moved back to Japan on a one-year Working Holiday in Tokyo which I dedicated to gaining experience through internships at different creative agencies.",

  "With the thought that one day I wished to cross paths with UltraSuperNew.",

  "After spending my final student year in Montreal where I experimented even more.",
  
  "I applied for USN's Creative Intern position.",

  "And here I am !",

"From <a class='popup-link' href='https://www.figma.com/design/Ux9pEbaMAPWzFpAWNTWDCU/GameMenu-UX-TeruNoHikari?node-id=0-1&t=xm6kAAIjJYagwpvz-1' target='_blank'>UX Design</a> to <a class='popup-link' href='https://robynereault.com/' target='_blank'>branding</a>, graphic design, motion, HTML, CSS and even creating a game from scratch !",
  "I like to think that everything is doable and that it is only a matter of practice, curiosity and intention.",

  "To me,\n being a creative means having the ability to become a blank canvas that can take shape to respond to any project, client or situation. ",

  "With this in mind,\n my ultimate goal is to work as an out-of-the-box and skillful multidisciplinary junior creative in the job and the country I am most passionate about and that truly feels like home to me.",

  "This final part was designed to give you a glimpse into who I am in a playful way !",

  "I hope you will enjoy it !",

];

let currentMessage = 0;
popupText.innerHTML = messages[0];

let pairPopupOpen = false;


  /* AIRPLANE */

function showFlyingIllustration() {

  const img = document.createElement('img');

  img.src = 'illustration-img/avion.png'; 

  img.classList.add('flying-illustration');

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 4000);
}


  /* BUTTON EVENT LISTENER */

popupBtn.addEventListener('click', () => {


  if (pairPopupOpen) {

  popup.classList.add('hidden');

  playMusicBtn.classList.add('hidden');

  plasticLoveAudio.pause();
  plasticLoveAudio.currentTime = 0;

  playMusicBtn.textContent = "▶ Play";

  popupBtn.textContent = "Next";

  pairPopupOpen = false;

  return;
}



  const message = messages[currentMessage];
  const nextMessage = messages[currentMessage + 1];

 if (currentMessage === 14) {
  showGameboy();
}

if (
  message ===
  "I like to think that everything is doable and that it is only a matter of practice, curiosity and intention."
) {
  hideGameboy();
}

  if (
  message ===
  "Japanese graphic design, packaging, arts... lit a spark in me."
) {
  clearCreativeQuestImages();
}

  if (
  message ===
  "I am 23 years old.\n Half French, half Dutch."
) {

  hideOriginsImages();

}

  if (
  message ===
  "The new Creative Intern at USN ! "
) {

  showOriginsImages();

}

  if (
    message ===
    "In 2024,\n I moved back to Japan on a one-year Working Holiday in Tokyo which I dedicated to gaining experience through internships at different creative agencies."
  ) {
    showUSNLogo();
  }

  if (
    message ===
    "With the thought that one day I wished to cross paths with UltraSuperNew."
  ) {
    hideUSNLogo();
  }

  if (
  message ===
  "With the thought that one day I wished to cross paths with UltraSuperNew."
) {

  showFlyingIllustration();

}

if (
  message ===
  "I applied for USN's Creative Intern position."
) {

  startUSNApplicationAnimation();

}

if (
  nextMessage ===
  "Fascinated by Japanese culture for as long as I can remember."
) {
  showCultureVideo();
}

if (
  nextMessage ===
  "I started my journey with a two-year International Business background focusing on the Japanese market but eventually got drawn into an exciting creative quest after my first introduction to Japan during a university exchange at Kyoto Gaidai in 2023 !"
) {
  hideCultureVideo();
}


  popupBtn.disabled = true;

  setTimeout(() => {
    popupBtn.disabled = false;
  }, 200);

  /* INTRO */
if (currentMessage === 0) {

  const imagesToShow = [

    ...introImages,
    ...introImages,
    ...introImages

  ];

  imagesToShow.forEach((imageSrc, index) => {

    setTimeout(() => {

      createIntroImage(
        imageSrc,
        index
      );

    }, index * 80);

  });

}

  if (currentMessage === 5) {

  startCreativeQuestAnimation();

}

  /* BACKGROUND */
  if (message === "From that moment on,\n I decided to pursue studies centered around communication and design.") {
    startBackgroundAnimation();
  }

  /* NEXT STEP */
  currentMessage++;

 /* if (message === "My name is Robyne.") {
    showNameImage();
  }*/

  if (currentMessage < messages.length) {
  popupText.innerHTML = nextMessage;
} else {
  popup.classList.add('hidden');
}
});

/* MEMORY GAME */

const cards =
  document.querySelectorAll('.memory-card');

const startScreen =
  document.getElementById('start-screen');

const startBtn =
  document.getElementById('start-btn');

const winScreen =
  document.getElementById('win-screen');

const game =
  document.querySelector('.memory-game');

let hasFlippedCard = false;

let lockBoard = false;

let firstCard, secondCard;

let matchedCards = 0;

game.classList.add('hidden');

/* START GAME */

startBtn.addEventListener('click', () => {

  startScreen.classList.add('hidden');

  game.classList.remove('hidden');

});

/* FLIP CARD */

function flipCard() {

  if (lockBoard) return;

  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {

    hasFlippedCard = true;

    firstCard = this;

    return;
  }

  secondCard = this;

  checkForMatch();
}

/* CHECK MATCH */

function checkForMatch() {

  let isMatch =

    firstCard.dataset.framework ===
    secondCard.dataset.framework;

  isMatch
    ? disableCards()
    : unflipCards();
}

/* DISABLE MATCHED */

function disableCards() {

  const framework = firstCard.dataset.framework;

  if (matchMessages[framework]) {

    popupText.innerHTML =
  matchMessages[framework];

    popup.classList.remove('hidden');

    popupBtn.textContent = "Close";

    pairPopupOpen = true;

    if (framework === "plastic-love") {

      playMusicBtn.classList.remove('hidden');

    } else {

      playMusicBtn.classList.add('hidden');

    }

  }

  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchedCards += 2;

  if (matchedCards === cards.length) {
    setTimeout(() => {
      winScreen.classList.remove('hidden');
    }, 1000);
  }

  resetBoard();
}

/* UNFLIP */

function unflipCards() {

  lockBoard = true;

  setTimeout(() => {

    firstCard.classList.remove('flip');

    secondCard.classList.remove('flip');

    resetBoard();

  }, 1500);
}

/* RESET */

function resetBoard() {

  [hasFlippedCard, lockBoard] =
    [false, false];

  [firstCard, secondCard] =
    [null, null];
}

/* SHUFFLE */

(function shuffle() {

  const orders = [...Array(cards.length).keys()];

  orders.sort(() => Math.random() - 0.5);

  cards.forEach((card, index) => {
    card.style.order = orders[index];
  });

})();

/* EVENTS */

cards.forEach(card =>

  card.addEventListener(
    'click',
    flipCard
  )

);
});