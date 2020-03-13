$(function(){

	$('.header__burger').click(function(event){
		//Мобильное меню
		$('.header__burger,.header__menu').toggleClass('active');
		//Отключение скролла
		$('body').toggleClass('lock');
	});

	$('.button,.phone-call__call').click(function(){
		//Отключение скролла
		$('body').toggleClass('lock');
		//Поп-ап окно при нажатии на кнопку
		$('.popup-container').fadeToggle();
	});

	$('.popup-container,.popup__del').click(function(event){
		//Закрытие поп-ап окна
		if(event.target == this) {
		$('body').toggleClass('lock');
		$('.popup-container').fadeToggle();
		//Удаление оформления "выполнено" с кнопки отправить
		$('.get-contact__submit').removeClass('done');
		//Замена значка "выполнено" на значок "отправить"
		$('.get-contact__submit').text('send');
		}
	});

	$('.get-contact__submit').click(function(){
		//Изменение оформления кнопки отправить
		$('.get-contact__submit').addClass('done');
		//Замена значка "отправить" на значок "выполнено"
		$('.get-contact__submit').text('done');
	});

	$('.animation-container__item').addClass('active');

	/*
	//Установка брейк поинтов для анимации
	$(window).setBreakpoints({
		distinct: true, 
		breakpoints: [
			//470,
			650,
			767,
		] 
	});

	$(window).bind('enterBreakpoint650',function(){
		//Трансформирование кнопки "заказать звонок" в мобильную версию
		$('.phone-call__call').addClass('mobile');
		$('.phone-call__call').addClass('material-icons');
		$('.mobile').text('phone');
	});

	$(window).bind('enterBreakpoint767',function(){
		//Трансформирование кнопки из мобильной версии в десктопную
		$('.phone-call__call').removeClass('mobile');
		$('.phone-call__call').removeClass('material-icons');
		$('.phone-call__call').text('Заказать звонок');
	});

	$(window).bind('enterBreakpoint650',function() {
		$('#curly_brace').animate({
			top: '-20%',
			left: '-130%',
		}, 1500);

		$('#lattice').animate({
			top:'-25%',
			left: '200%'
		}, 1500);

		$('#html_close').animate({
			top: '50%', 
			left: '-160%',
		}, 1500);

		$('#div').animate({
			top: '60%', 
			left: '200%',
		}, 1500);
	});

	$(window).bind('enterBreakpoint767',function() {
		$('#curly_brace').animate({
			top: '-60%',
			left: '-40%',
		}, 1500);

		$('#lattice').animate({
			top:'-40%',
			left: '190%'
		}, 1500);

		$('#html_close').animate({
			top: '70%', 
			left: '-30%',
		}, 1500);

		$('#div').animate({
			top: '60%', 
			left: '120%',
		}, 1500);
	});
	*/

	$('.slider').slick({
		//Слайдер
		slidesToShow:3,
		slidesToScroll: 2,
		infinite: true,
		responsive:[
			{
				breakpoint:1100,
				settings:{
					arrows:false,
					dots:true,
					slidesToShow:2,
					slidesToScroll: 2
				}
			},{
				breakpoint:649,
				settings:{
					arrows:false,
					dots:true,
					slidesToShow:1,
					slidesToScroll: 1
				}
			}
		]
	});
});