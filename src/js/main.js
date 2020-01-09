// Вызов попапа Callback
var openPopupButtons = document.querySelectorAll('.footer__button')
var popup = document.querySelector('.popup-callback')
var closePopupCallback = document.querySelector('.popup__close')

openPopupButtons.forEach(function(domElement) {
    domElement.addEventListener('click', function() {
        popup.classList.remove('hidden')
    })
})

closePopupCallback.addEventListener('click', function() {
    popup.classList.add('hidden')
})

// Скрытие попапа при клике на пустом месте
$(".popup-callback").on('click', function (e) {
	if (e.target == this) $(".popup-callback").addClass('hidden');
})