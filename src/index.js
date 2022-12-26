const section = document.querySelectorAll('section');
const body = document.querySelector('.body');
const pointer1 = document.querySelector('.pointer1');
const pointer2 = document.querySelector('.pointer2');
const ekPrjButton = document.querySelector('.ek-button');
const hnPrjButton = document.querySelector('.hn-button');
const ektour = document.querySelector('.ektour-container');
const hntech = document.querySelector('.hntech-container');
const slideWrapper = document.querySelector('.slide-wrapper');
const ektourItems = document.querySelectorAll('.ektour');
const ekPrevButton = document.querySelector('.ekhana-prev');
const ekNextButton = document.querySelector('.ekhana-next');
const hntechItems = document.querySelectorAll('.hntech');
const hnPrevButton = document.querySelector('.hntech-prev');
const hnNextButton = document.querySelector('.hntech-next');

/* page reload */
function scrollPage() {
  let page = window.location.hash ? document.querySelector(window.location.hash) : document.querySelector('#about-me');
  const curPage = page.offsetTop;
  window.scrollTo({ top: curPage });
}

window.onload = scrollPage();

/* scroll event */
let observer = new IntersectionObserver((e) => {
  e.forEach((item) => {
    if (item.isIntersecting) {
      item.target.style.opacity = 1;
    } else {
      item.target.style.opacity = 0;
    }
  })
});

observer.observe(section[0]);
observer.observe(section[1]);
observer.observe(section[2]);
observer.observe(section[3]);

/* snow event */

const Body = document.querySelector('body');
const today = new Date();
const month = today.getMonth() + 1;

function drawSnow() {
  const snow = document.createElement('div');
  const size = 10 + Math.random() * 2;
  const duration = 20 + Math.random() * 10;

  snow.classList.add('snow');
  snow.style.width = `${size}px`;
  snow.style.height = `${size}px`;
  snow.style.left = `${Math.random() * window.innerWidth}px`;
  snow.style.animation = `fall ${duration}s linear`;
  Body.appendChild(snow);

  setTimeout(() => {
    Body.removeChild(snow);
    drawSnow();
  }, duration * 1000)
}

if (month > 10 || month < 3) {
  for (let i = 0; i < 30; i++) {
    setTimeout(drawSnow, 500 * i);
  }
}

/* pointer event */

/*
body.addEventListener('pointermove', (e) => {
  pointer1.style.opacity = 1;
  pointer2.style.opacity = 1;
  pointer1.style.transform = 'translate(' + (e.pageX + 10) + 'px,' + (e.pageY + 10) + 'px)';
  pointer2.style.transform = 'translate(' + (e.pageX + 20) + 'px,' + (e.pageY + 20) + 'px)';
});

body.addEventListener('pointerleave', (e) => {
  pointer1.style.opacity = 0;
  pointer2.style.opacity = 0;
});
*/

/* project button event */

ekPrjButton.addEventListener('click', item => {
  item.target.classList.add('selected');
  hnPrjButton.classList.remove('selected');
  ektour.classList.add('active');
  hntech.classList.remove('active');
});

hnPrjButton.addEventListener('click', item => {
  item.target.classList.add('selected');
  ekPrjButton.classList.remove('selected');
  hntech.classList.add('active');
  ektour.classList.remove('active');
});

/* slide event */
const slideWidth = slideWrapper.clientWidth;
const ekMaxSlide = ektourItems.length;

// ektour
let ekCurSlide = 1;

ekPrevButton.addEventListener('click', () => {
  if (ekCurSlide > 1) {
    ekCurSlide--;
  } else {
    ekCurSlide = ekMaxSlide;
  }
  const offset = slideWidth * (ekCurSlide - 1);
  ektourItems.forEach((item) => {
    item.setAttribute("style", `left: ${-offset}px`);
  });
});

ekNextButton.addEventListener('click', () => {
  if (ekCurSlide < ekMaxSlide) {
    ekCurSlide++;
  } else {
    ekCurSlide = 1;
  }
  const offset = slideWidth * (ekCurSlide - 1);
  ektourItems.forEach((item) => {
    item.setAttribute("style", `left: ${-offset}px`);
  });
});

// hntech
let hntechCurSlide = 1;
const hnMaxSlide = hntechItems.length;

hnPrevButton.addEventListener('click', () => {
  if (hntechCurSlide > 1) {
    hntechCurSlide--;
  } else {
    hntechCurSlide = hnMaxSlide;
  }
  const offset = slideWidth * (hntechCurSlide - 1);
  hntechItems.forEach((item) => {
    item.setAttribute("style", `left: ${-offset}px`);
  });
});

hnNextButton.addEventListener('click', () => {
  if (hntechCurSlide < hnMaxSlide) {
    hntechCurSlide++;
  } else {
    hntechCurSlide = 1;
  }
  const offset = slideWidth * (hntechCurSlide - 1);
  hntechItems.forEach((item) => {
    item.setAttribute("style", `left: ${-offset}px`);
  });
});