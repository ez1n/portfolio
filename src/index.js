
const section = document.querySelectorAll('section');
const body = document.querySelector('.body');
const pointer1 = document.querySelector('.pointer1');
const pointer2 = document.querySelector('.pointer2');

// scroll event
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

// pointer event
body.addEventListener('pointermove', (e) => {
  pointer1.style.opacity = 1;
  pointer2.style.opacity = 1;
  pointer1.style.transform = 'translate(' + e.pageX + 'px,' + e.pageY + 'px)';
  pointer2.style.transform = 'translate(' + (e.pageX + 10) + 'px,' + (e.pageY + 10) + 'px)';
});

body.addEventListener('pointerleave', (e) => {
  pointer1.style.opacity = 0;
  pointer2.style.opacity = 0;
});