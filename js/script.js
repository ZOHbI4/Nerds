//modal-content open/close

$(document).on('ready', function() {
	// popup + overlay
	var link = document.querySelector('.btn-incontacts');
	var popup = document.querySelector('.modal-content');
	var overlay = document.querySelector('.modal-overlay');
	var close = popup.querySelector('.modal-content-close');
	var name = popup.querySelector('[name=name]');
	
	link.addEventListener('click', function(event) {
		event.preventDefault();
		popup.classList.add('modal-content-show');
		overlay.classList.add('modal-overlay-show');
		name.focus();
	});

	close.addEventListener('click', function(event) {
		event.preventDefault();
		popup.classList.remove('modal-content-show');
		overlay.classList.remove('modal-overlay-show');
	});

	window.addEventListener('keydown', function(event) {
		if (event.keyCode === 27 && popup.classList.contains('modal-content-show')) {
			popup.classList.remove('modal-content-show');
			overlay.classList.remove('modal-overlay-show');
		}
	});
});