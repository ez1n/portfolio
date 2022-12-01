let observer = new IntersectionObserver((e) => {
  e.forEach((item) => {
    if (item.isIntersecting) {
      item.target.style.opacity = 1;
    } else {
      item.target.style.opacity = 0;
    }
  })
});

const section = document.querySelectorAll('section');
observer.observe(section[0]);
observer.observe(section[1]);
observer.observe(section[2]);
observer.observe(section[3]);
