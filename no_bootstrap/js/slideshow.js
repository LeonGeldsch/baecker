// slideshow.js to power the slideshow

// -----------------------------------------------------------------------------

// the time between slides in milliseconds
const INTERVAL_TIME = 7000;

// the starting slide (starting at 0)
const START_SLIDE = 0;

// -----------------------------------------------------------------------------

// all the imgages of the slideshow
var allImages = document.querySelectorAll('.slideshow-container img');

// the container around the bullet points
var bulletPointContainer = document.querySelector('.bullet-point-container')

// all buttons to move around the slideshow
var allSlideBulletPoints = [];

// previous and next slide button
var prevButton = document.querySelector('.slideshow-container .prev');
var nextButton = document.querySelector('.slideshow-container .next');

// the interval timer
var autoSlideInterval;

var activeSlide = START_SLIDE;
var autoSlideIntervalTime = INTERVAL_TIME;

// the Media Query
var mediaQuery = window.matchMedia("(min-width: 800px)")


// -----------------------------------------------------------------------------

// remove the active states from the current image and button, activate new image and button
function showSlide(index) {
  allImages[activeSlide].classList.remove('active');
  allSlideBulletPoints[activeSlide].classList.remove('active');
  activeSlide = index;
  if (activeSlide > allImages.length - 1) activeSlide = 0;
  if (activeSlide < 0) activeSlide = allImages.length - 1;
  allImages[activeSlide].classList.add('active');
  allSlideBulletPoints[activeSlide].classList.add('active');
}

// show the next slide
function showNextSlide() {
  index = activeSlide + 1;
  showSlide(index);
}

// show the previous slide
function showPrevSlide() {
  index = activeSlide - 1;
  showSlide(index);
}

// stop the autoslide interval
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// start the autoslide interval
function startAutoSlide() {
  autoSlideInterval = setInterval(showNextSlide, autoSlideIntervalTime);
}

// create the bullet points in relation to the number of images
function createBulletPoints() {
  allImages.forEach((image, i) => {
    allSlideBulletPoints[i] = document.createElement("div");
    allSlideBulletPoints[i].classList.add('slideshow-bullet-point');
    if (i === 0) allSlideBulletPoints[i].classList.add('active');
    allSlideBulletPoints[i].setAttribute('data-index', i);
    bulletPointContainer.appendChild(allSlideBulletPoints[i]);
  });
}

// -----------------------------------------------------------------------------

// create the bullet points
createBulletPoints();

// wait for click, stop interval, show slide depending on button clicked, start interval again
allSlideBulletPoints.forEach ((slideBulletPoint, i) => {
  slideBulletPoint.addEventListener('click', function(evt) {
    stopAutoSlide();
    showSlide(parseInt(evt.target.getAttribute('data-index')));
    startAutoSlide();
  })
});

// wait for click and show the previous slide
prevButton.addEventListener('click', function() {
  stopAutoSlide();
  showPrevSlide();
  startAutoSlide();
});

// wait for click and show the previous slide
nextButton.addEventListener('click', function() {
  stopAutoSlide();
  showNextSlide();
  startAutoSlide();
});

// -----------------------------------------------------------------------------

// start the autoslide
startAutoSlide();

// ---------------------------- Media Queries -----------------------------------

// If Media Query matches replace old image source with new image source
function myFunction(x) {
  if (mediaQuery.matches) {
    allImages.forEach((image, i) => {
      if (image.src.substring(image.src.length - 10, image.src.length - 4) === 'mobile') {
        let newImageSrc = image.src.substring(0, image.src.length - 11) + '.png';
        image.src = newImageSrc;
      }
    });
  } else {
    allImages.forEach((image, i) => {
      let newImageSrc = image.src.substring(0, image.src.length - 4) + '_mobile.png';
      image.src = newImageSrc;
    });
  }
}


// start the Mediaquery once on site load
myFunction(mediaQuery)

// attach listener
mediaQuery.addListener(myFunction)
