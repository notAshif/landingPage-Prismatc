



const allContainer = gsap.utils.toArray(".container_item");
const venueImg = document.querySelector(".container_image");
const venueImgWrap = document.querySelector(".container_item-imgWrap");

const initContainer = () => {
  allContainer.forEach((link) => {
    link.addEventListener("mouseenter", venueHover);
    link.addEventListener("mouseleave", venueHover);
    link.addEventListener("mouseenter", moveVenueImg);
  });
};

function moveVenueImg(e) {
  const xpos = e.clientX;
  const ypos = e.clientY;

  const tl = gsap.timeline();

  tl.to(venueImgWrap, {
    x: xpos,
    y: ypos,
  });
}

function venueHover(e) {
  if (e.type === 'mouseenter') {
    const targetImg = e.target.dataset.img;

    const tl = gsap.timeline();

    tl.set(venueImg, {
        backgroundImage: `url(${targetImg})`
    }).to(venueImgWrap, {
      duration: 0.5,
      autoAlpha: 1,
    });
  } else if (e.type === 'mouseleave') {
    const tl = gsap.timeline();
    tl.to(venueImgWrap, {
      duration: 0.5,
      autoAlpha: 0,
    });
  }
}

function init() {
  initContainer();
}

window.addEventListener("load", function () {
  init();
});


tl = new TimelineMax();

tl.from('nav > div', 1.6,{
    opacity: 0, 
    y: 60,
    ease: Expo.easeInOut,
    delay: .2,
});

tl.from('.site_logo-center', 1.6, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
}, '-=1.6')


tl.staggerFrom('.site_menu > li', 1.6,{
    opacity: 0,
    y: 60,
    ease: Power2.easeOut
}, .2)

tl.staggerFrom('.header > div', 1,{
    opacity: 0,
    y: 60,
    ease: Power2.easeOut,
    delay: -1.4,
}, .2)