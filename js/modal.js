// all images of the items
var allItemImages = document.querySelectorAll('.item img');

// the modal window
var modalWindow = document.querySelector('.modal');

// the image within the modal
var modalImage = document.querySelector('.modal-image');

// the modal caption text
var modalCaption = document.querySelector('.modal-caption h2');

// the x button to close the modal
var modalCloseButton = document.querySelector('.modal-close-button');

// the previous and next buttons
var prevButton = document.querySelector('.modal .prev');
var nextButton = document.querySelector('.modal .next');

var activeModal = 0;

//------------------------------------------------------------------------------

// open the modal with the corresponding image
function openModal(index) {
  var imageSrc = allItemImages[index].src
  var modalImageSrc = imageSrc.substring(0, imageSrc.length - 10) + '.png';
  modalImage.src = modalImageSrc;
  changeModalCaption(allItemImages[index].alt);
  modalWindow.classList.add('active');
}

// change the caption of the modal
function changeModalCaption(caption) {
  modalCaption.innerHTML = caption;
}

// -----------------------------------------------------------------------------

// listen for clicks on all images and open the modal if one is clicked
allItemImages.forEach((img, i) => {
  var index = i;
  img.addEventListener('click', function(evt) {
    openModal(index);
    activeModal = index;
  });
});

prevButton.addEventListener('click', function() {
  if (activeModal > 0) {
    activeModal--;
  } else {
    activeModal = allItemImages.length - 1;
  }
  openModal(activeModal);
});

nextButton.addEventListener('click', function() {
  if (activeModal < allItemImages.length - 1) {
    activeModal++;
  } else {
    activeModal = 0;
  }
  openModal(activeModal);
});

// close window in case of click outside of image
modalWindow.addEventListener('click', function(evt) {
  evt.target.classList.remove('active');
});

// close modal in case of click on close button
modalCloseButton.addEventListener('click', function(evt) {
  modalWindow.classList.remove('active');
});
