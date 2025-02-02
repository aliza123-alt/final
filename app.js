// Function to update image based on hover
function upDate(previewPic) {
  console.log("Mouse over an image", previewPic);

  const imageDiv = document.getElementById('image');
  imageDiv.textContent = previewPic.alt; // Text becomes the alt attribute of the image
  imageDiv.style.backgroundImage = `url(${previewPic.src})`; // Set background image
}

// Function to reset image when mouse leaves
function undo() {
  console.log("Mouse left the image gallery");

  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = 'url("")'; // Reset background image
  imageDiv.textContent = "Hover over an image below to display here."; // Reset text
}

// Function to handle focus on image
function onFocusImage(previewPic) {
  console.log("Image focused", previewPic);
  const imageDiv = document.getElementById('image');
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

// Function to handle blur event (when focus is removed)
function onBlurImage() {
  console.log("Image lost focus");
  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = 'url("")'; // Reset background image
  imageDiv.textContent = "Hover over an image below to display here."; // Reset text
}

// Function to add tabindex for accessibility
function setTabIndex() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.setAttribute('tabindex', index);
  });
}

// On window load, set up the event listeners and other functionality
window.onload = () => {
  console.log("Page loaded");

  const thumbnails = document.querySelectorAll('.thumbnail');

  // Set tabindex attribute
  setTabIndex();

  // Add event listeners for mouseover and mouseleave
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseenter', () => upDate(thumbnail));
    thumbnail.addEventListener('mouseleave', undo);
    thumbnail.addEventListener('focus', () => onFocusImage(thumbnail));
    thumbnail.addEventListener('blur', onBlurImage);
  });
};
