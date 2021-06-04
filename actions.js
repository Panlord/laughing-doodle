var slideIndex = 1;
showSlide(slideIndex);

// prev and next buttons
function changeSlide(x) {
	showSlide(slideIndex += x);
}

// thumbnail image controls
function currentSlide(x) {
	showSlide(slideIndex = x);
}

// showing a slide
function showSlide(x) {
	var i;
	var slides = document.getElementByClassName("slideShowImage");
	var buttons = document.getElementByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	buttons[slideIndex - 1].className += " active";
}
