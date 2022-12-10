const section = document.querySelectorAll('section');
const body = document.querySelector('.body');
const pointer1 = document.querySelector('.pointer1');
const pointer2 = document.querySelector('.pointer2');
const slideWrapper = document.querySelector('.slide-wrapper');
const ektourItems = document.querySelectorAll('.ektour');
const ekPrevButton = document.querySelector('.ekhana-prev');
const ekNextButton = document.querySelector('.ekhana-next');
const hntechItems = document.querySelectorAll('.hntech');
const hnPrevButton = document.querySelector('.hntech-prev');
const hnNextButton = document.querySelector('.hntech-next');

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

/* pointer event */
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