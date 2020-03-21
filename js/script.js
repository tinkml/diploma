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

	$('.phone-call__call').click(function(event){
		event.preventDefault();
		//Отключение скролла
		//$('body').toggleClass('lock');
		//Поп-ап окно при нажатии на кнопку
		$('.popup-container').fadeToggle();
	});

	$('.popup-container,.popup__del button').click(function(event){
		event.preventDefault();
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

	//Открытие основной формы
	$('.button').click(function(event){
		event.preventDefault();
		//Поп-ап окно при нажатии на кнопку
		$('.form__container').show();
	});

	//Закрытие основной формы
	$('.form__close button,.form__container').click(function(event){
		event.preventDefault();
		if(event.target == this) {
			$('.form__container').hide();
		}
	});

	//Маска для номер телефона
	$('input[type="tel"]').inputmask({"mask": "8 (999) 999-9999"});

	//Маска для адреса электронной почты
	$('input[type="email"]').inputmask({
	    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
	    greedy: false,
	    onBeforePaste: function (pastedValue, opts) {
	      pastedValue = pastedValue.toLowerCase();
	      return pastedValue.replace("mailto:", "");
	    },
	    definitions: {
	      '*': {
	        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
	        casing: "lower"
	      }
	    }
  	});

	//Валидация основной формы
	$( ".form" ).validate({
		errorPlacement(error, element){
			return true;
		},
		rules: {
			name: "required",
			phone: "required",
			email: {
			  required: true,
			  email: true
			}
		},
	});

	//Валидация формы обратного звонка
	$( ".popup" ).validate({
		errorPlacement(error, element){
			return true;
		},
		rules: {
			phone: "required",
		},
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