$(function(){

	$('.header__burger').click(function(event){
		//Мобильное меню
		$('.header__burger,.header__menu').toggleClass('active');
		//Отключение скролла
		//$('body').toggleClass('lock');
	});

	//Закрывает мобильное меню при нажатии на пункт меню
	$('nav a').click(function(event){
		event.preventDefault();
		$('.header__burger,.header__menu').removeClass('active');
	});


	//Плавный скролл по нажатию на элементы навигации
	$('nav a').click(function(event){
		event.preventDefault();
		let href = $(this).attr('href');
		let headerHeight = $('.header').height();//высота хедера, для исправления наезда на блок
		let offset = $(href).offset().top - headerHeight;//переходим на отступ до блока - отъезжаем на высоту хедера
		$('body,html').animate({
			scrollTop: offset,
		}, 700);
	});

	$('.button,.phone-call__call').click(function(){
		event.preventDefault();
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