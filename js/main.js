$(document).ready(function() {
	$("#carousel").skippr({
		autoPlay : true,
		autoPlayDuration : 6000,
		logs : true,
		speed: 2000,
	});
});


var $grid = $('.works__all').isotope({
  itemSelector: '.work__item',
});

$('.works__filter').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.works__filter').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	margin: 125,
	items: 2,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2,
			margin: 50
		},
		1199: {
			margin: 125
		},
	},
});


$(document).ready(function(){
	$("#navigation").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});
});