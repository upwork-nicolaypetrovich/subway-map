$(window).resize(function () {
	if($('#mobileList li').hasClass('active')){
		$('.mu_choice').show();
	}
});

$(document).ready(function(){
	// $('.scrollbar-inner').scrollbar();
	$('.mu_select').SumoSelect({search: true, searchText: 'Введите текст', floatWidth: 400, forceCustomRendering: true});
	if (window.innerWidth>=992){
		$('.SumoSelect .opt').on('click', function(){
			$('.SumoSelect').removeClass('open');
			var a = $(this).children().html();
			$('.search-txt').val(a);
		})
		$('.SumoSelect').on('mouseenter', function(){
			$(this).addClass('open');
			$('.mu_select_wr').addClass('open');
		});
		$('.mu_btn_sel_del').on('mouseenter', function(){
			$(this).parent().find('.SumoSelect').addClass('open');
		});
		$('.SumoSelect').on('mouseleave', function(){
			if (!$('.search-txt').is(":focus")) {
				$('.SumoSelect').removeClass('open');
				$('.mu_select_wr').removeClass('open');
			}
		});
		$('.mu_select_wr').on('blur',function(){
				$('.SumoSelect').removeClass('open');
				$('.mu_select_wr').removeClass('open');
		});
		$('body').on('click', function(e){
				if (e.target.className.indexOf("mu_btn_sel_del") == -1){
					$('.SumoSelect').removeClass('open');
					$('.mu_select_wr').removeClass('open');
				}
		});
	}

	$('.mu_block2_del').on('click', function(){
		$(this).parent().remove();
	});

	
	$('.mu_mobile_remove').on('click', function(){
		$('.mu_block2_mobile span').remove();
		$('.mu_choice').hide();
	});
	$('#mobileList').on('click', function(){
		if (($('#mobileList li').hasClass('active'))) {
			$('.mu_choice').show();
		}else{
			$('.mu_choice').hide();
		}
	});
	$('.check_field').on('change', function(){
		if($('.check_field').is(':checked')){
			$('.mu_choice').show();
		}else{
			$('.mu_choice').hide();
		}
	});
	$('.mu_look_all').on('click', function(){
		$('.selected-items-container').toggleClass('active');
	});
	
	if ($('#mobileList li').hasClass('active')) {
		$('.mu_choice').show();
	}else{
		$('.mu_choice').hide();
	}





	//******* Logic *******//
	// map object constructor
	function metroMapContruct(){

		// stations list
		this.stations = [];
		this.stations.push( {
			name: 'Чистые Пруды',
			color: '#ee3124',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-1'
		} );
		this.stations.push( {
			name: 'Бибирево',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-2'
		} );
		this.stations.push( {
			name: 'Новослободская',
			color: '#9c563e',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-3'
		} );
		this.stations.push( {
			name: 'Кузнецкий Мост',
			color: '#8e479b',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-4'
		} );
		this.stations.push( {
			name: 'Пушкинская',
			color: '#8e479b',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-5'
		} );

			this.stations.push( {
			name: 'Алтуфьево',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-6'
		} );
		this.stations.push( {
			name: 'Отрадное',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-7'
		} );
		this.stations.push( {
			name: 'Владыкино',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-8'
		} );

			this.stations.push( {
			name: 'Петровско-Разумовская',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-9'
		} );
		this.stations.push( {
			name: 'Тимирязевская',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-10'
		} );
		this.stations.push( {
			name: 'Дмитровская',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-11'
		} );
		this.stations.push( {
			name: 'Савёловская',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-12'
		} );

		this.stations.push( {
			name: 'Менделеевская',
			color: '#a1a2a3',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-13'
		} );

			this.stations.push( {
			name: 'Цветной бульвар',
			color: '#a1a2a3',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-14'
		} );
		this.stations.push( {
			name: 'Чеховская',
			color: '#a1a2a3',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-15'
		} );
		this.stations.push( {
			name: 'Боровицкая',
			color: '#a1a2a3',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-16'
		} );
		this.stations.push( {
			name: 'Серпуховская',
			color: '#a1a2a3',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-17'
		} );
		this.stations.push( {
			name: 'Полянка',
			color: '#a1a2a3',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-18'
		} );		
		this.stations.push( {
			name: 'Тульская',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-19'
		} );
		this.stations.push( {
			name: 'Нагатинская',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-20'
		} );
		this.stations.push( {
			name: 'Нагорная',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-21'
		} );

		this.stations.push( {
			name: 'Нахимовский проспект',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-22'
		} );
		this.stations.push( {
			name: 'Севастопольская',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-23'
		} );
		this.stations.push( {
			name: 'Чертановская',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-24'
		} );
		this.stations.push( {
			name: 'Южная',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-25'
		} );

		this.stations.push( {
			name: 'Пражская',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-26'
		} );
		this.stations.push( {
			name: 'Ул. Академика Янгеля',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-27'
		} );
		this.stations.push( {
			name: 'Аннино',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-28'
		} );
		this.stations.push( {
			name: 'Бульвар Дмитрия Донского',
			color: '#a1a2a3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-29'
		} );

		this.stations.push( {
			name: 'Каховская',
			color: '#79CDCD',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-30'
		} );
		this.stations.push( {
			name: 'Варшавская',
			color: '#79CDCD',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-31'
		} );
		this.stations.push( {
			name: 'Битцевский парк',
			color: '#ACBFE3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-32'
		} );
		this.stations.push( {
			name: 'Лесопарковая',
			color: '#ACBFE3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-33'
		} );
		this.stations.push( {
			name: 'Улица Старокачаловская',
			color: '#ACBFE3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-34'
		} );
		this.stations.push( {
			name: 'Улица Скобелевская',
			color: '#ACBFE3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-35'
		} );

		this.stations.push( {
			name: 'Бульвар Адмирала Ушакова',
			color: '#ACBFE3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-36'
		} );
		this.stations.push( {
			name: 'Улица Горчакова',
			color: '#ACBFE3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-37'
		} );
		this.stations.push( {
			name: 'Бунинская аллея',
			color: '#ACBFE3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-38'
		} );
		this.stations.push( {
			name: 'Новоясеневская',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-39'
		} );
		this.stations.push( {
			name: 'Ясенево',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-40'
		} );
		this.stations.push( {
			name: 'Тёплый стан',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-41'
		} );		
		this.stations.push( {
			name: 'Коньково',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-42'
		} );		
		this.stations.push( {
			name: 'Беляево',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-43'
		} );		
		this.stations.push( {
			name: 'Калужская',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-44'
		} );		
		this.stations.push( {
			name: 'Новые Черёмушки',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-45'
		} );		
		this.stations.push( {
			name: 'Профсоюзная',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-46'
		} );		
		this.stations.push( {
			name: 'Академическая',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-47'
		} );		
		this.stations.push( {
			name: 'Ленинский проспект',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-48'
		} );	
		this.stations.push( {
			name: 'Шаболовская',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-49'
		} );		
		this.stations.push( {
			name: 'Октябрьская',
			color: '#F58231',
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-50'
		} );	
						
		this.stations.push( {
			name: 'Третьяковская',
			color: '#F58231',
			color: '#FFCC32',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-51'
		} );				
			this.stations.push( {
			name: 'Китай-Город',
			color: '#F58231',
			color: '#8E479B',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-52'
		} );				
		this.stations.push( {
			name: 'Тургеневская',
			color: '#F58231',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-53'
		} );				
		this.stations.push( {
			name: 'Сухаревская',
			color: '#F58231',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-54'
		} );	

		this.stations.push( {
			name: 'Проспект Мира',
			color: '#F58231',
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-55'
		} );
		this.stations.push( {
			name: 'Белорусская',
			color: '#48B85E',
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-56'
		} );

		this.stations.push( {
			name: 'Киевская',
			color: '#00C1F3',
			color: '#0078BF',
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-57'
		} );
		this.stations.push( {
			name: 'Парк культуры',
			color: '#EE3124',
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-58'
		} );
		this.stations.push( {
			name: 'Павелецкая',
			color: '#48B85E',
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-59'
		} );
		this.stations.push( {
			name: 'Таганская',
			color: '#8E479B',
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-60'
		} );
		this.stations.push( {
			name: 'Курская',
			color: '#0078BF',
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-61'
		} );

		this.stations.push( {
			name: 'Комсомольская',
			color: '#EE3124',
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-62'
		} );
		this.stations.push( {
			name: 'Краснопресненская',			
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-63'
		} );
		this.stations.push( {
			name: 'Добрынинская',			
			color: '#9C563E',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-64'
		} );

		this.stations.push( {
			name: 'Кропоткинская',			
			color: '#EE3124',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-65'
		} );
		this.stations.push( {
			name: 'Библиотека им.Ленина',			
			color: '#EE3124',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-66'
		} );
		this.stations.push( {
			name: 'Охотный ряд',			
			color: '#EE3124',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-67'
		} );
		this.stations.push( {
			name: 'Лубянка',			
			color: '#EE3124',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-68'
		} );
		this.stations.push( {
			name: 'Красные Ворота',			
			color: '#EE3124',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-69'
		} );

		this.stations.push( {
			name: 'Новокузнецкая',			
			color: '#48B85E',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-70'
		} );
		this.stations.push( {
			name: 'Театральная',			
			color: '#48B85E',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-71'
		} );
		this.stations.push( {
			name: 'Тверская',			
			color: '#48B85E',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-72'
		} );
		this.stations.push( {
			name: 'Маяковская',			
			color: '#48B85E',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-73'
		} );

		this.stations.push( {
			name: 'Чкаловская',			
			color: '#B4D445',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-74'
		} );
		this.stations.push( {
			name: 'Сретенский бульвар',			
			color: '#B4D445',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-75'
		} );
		this.stations.push( {
			name: 'Трубная',			
			color: '#B4D445',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-76'
		} );
		this.stations.push( {
			name: 'Смоленская',			
			color: '#00C1F3',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-77'
		} );
		this.stations.push( {
			name: 'Арбатская',			
			color: '#00C1F3',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-78'
		} );
		this.stations.push( {
			name: 'Александровский сад',			
			color: '#00C1F3',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-79'
		} );
		this.stations.push( {
			name: 'Смоленская',			
			color: '#0078BF',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-80'
		} );		
		this.stations.push( {
			name: 'Арбатская',			
			color: '#0078BF',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-81'
		} );		
		this.stations.push( {
			name: 'Пл.Революции',			
			color: '#0078BF',
			onRing: false,
			inRing: true,
			htmlId: 'map-mark-82'
		} );	
		this.stations.push( {
			name: 'Рижская',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-83'
		} );									
		this.stations.push( {
			name: 'Алексеевская',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-84'
		} );
		this.stations.push( {
			name: 'ВДНХ',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-85'
		} );
		this.stations.push( {
			name: 'Ботанический сад',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-86'
		} );
		this.stations.push( {
			name: 'Свибливо',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-87'
		} );
		this.stations.push( {
			name: 'Бабушкинская',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-88'
		} );
		this.stations.push( {
			name: 'Медведково',
			color: '#F58231',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-89'
		} );
		this.stations.push( {
			name: 'Алма-Атинская',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-90'
		} );
		this.stations.push( {
			name: 'Красногвардейская',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-91'
		} );
		this.stations.push( {
			name: 'Домодедовская',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-92'
		} );
		this.stations.push( {
			name: 'Орехово',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-93'
		} );
		this.stations.push( {
			name: 'Царицыно',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-94'
		} );
		this.stations.push( {
			name: 'Каширская',
			color: '#48B85E',
			color: '#79CDCD',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-95'
		} );
		this.stations.push( {
			name: 'Кантемировская',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-96'
		} );
		this.stations.push( {
			name: 'Коломенская',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-97'
		} );
		this.stations.push( {
			name: 'Технопарк',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-98'
		} );
		this.stations.push( {
			name: 'Автозаводская',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-99'
		} );

		this.stations.push( {
			name: 'Динамо',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-100'
		} );
		this.stations.push( {
			name: 'Аэропорт',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-101'
		} );
		this.stations.push( {
			name: 'Сокол',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-102'
		} );
		this.stations.push( {
			name: 'Войковская',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-103'
		} );
		this.stations.push( {
			name: 'Водный стадион',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-104'
		} );
		this.stations.push( {
			name: 'Речной вокзал',
			color: '#48B85E',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-105'
		} );	
	
		this.stations.push( {
			name: 'Фонвизинская',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-106'
		} );	
		this.stations.push( {
			name: 'Бутырская',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-107'
		} );	
		this.stations.push( {
			name: 'Марьина Роща',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-108'
		} );
		this.stations.push( {
			name: 'Достоевская',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-109'
		} );
		this.stations.push( {
			name: 'Римская',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-110'
		} );
		this.stations.push( {
			name: 'Крестьянская застава',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-111'
		} );
		this.stations.push( {
			name: 'Дубровка',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-112'
		} );
		this.stations.push( {
			name: 'Кожуховская',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-113'
		} );
		this.stations.push( {
			name: 'Печатники',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-114'
		} );
		this.stations.push( {
			name: 'Волжская',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-115'
		} );
		this.stations.push( {
			name: 'Люблино',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-116'
		} );
		this.stations.push( {
			name: 'Братиславская',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-117'
		} );
		this.stations.push( {
			name: 'Марьино',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-118'
		} );
		this.stations.push( {
			name: 'Борисово',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-119'
		} );
		this.stations.push( {
			name: 'Шипиловская',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-120'
		} );
		this.stations.push( {
			name: 'Зябликово',
			color: '#B4D445',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-121'
		} );
		this.stations.push( {
			name: 'Котельники',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-122'
		} );
		this.stations.push( {
			name: 'Жулебино',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-123'
		} );
		this.stations.push( {
			name: 'Лермонтовский проспект',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-124'
		} );
		this.stations.push( {
			name: 'Выхино',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-125'
		} );
		this.stations.push( {
			name: 'Рязанский проспект',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-126'
		} );
		this.stations.push( {
			name: 'Кузьминки',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-127'
		} );
		this.stations.push( {
			name: 'Текстильщики',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-128'
		} );
		this.stations.push( {
			name: 'Волгоградский проспект',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-129'
		} );
		this.stations.push( {
			name: 'Пролетарская',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-130'
		} );

		this.stations.push( {
			name: 'Баррикадная',
			color: '#8E479B',
			onRing: true,
			inRing: false,
			htmlId: 'map-mark-131'
		} );
		this.stations.push( {
			name: 'Улица 1905 года',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-132'
		} );
		this.stations.push( {
			name: 'Беговая',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-133'
		} );
		this.stations.push( {
			name: 'Полежаевская',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-134'
		} );
		this.stations.push( {
			name: 'Октябрьское Поле',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-135'
		} );
		this.stations.push( {
			name: 'Щукинская',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-136'
		} );
		this.stations.push( {
			name: 'Спартак',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-137'
		} );
		this.stations.push( {
			name: 'Тушинская',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-138'
		} );
		this.stations.push( {
			name: 'Сходненская',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-139'
		} );
		this.stations.push( {
			name: 'Планерная',
			color: '#8E479B',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-140'
		} );
		this.stations.push( {
			name: 'Саларьево',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-141'
		} );
		this.stations.push( {
			name: 'Румянцево',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-142'
		} );
		this.stations.push( {
			name: 'Тропарёво',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-143'
		} );
		this.stations.push( {
			name: 'Юго-Западная',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-144'
		} );
		this.stations.push( {
			name: 'Проспект Вернадского',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-145'
		} );
		this.stations.push( {
			name: 'Университет',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-146'
		} );
		this.stations.push( {
			name: 'Воробьёвы горы',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-147'
		} );
		this.stations.push( {
			name: 'Спортивная',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-148'
		} );
		this.stations.push( {
			name: 'Фрунзенская',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-149'
		} );

		this.stations.push( {
			name: 'Красносельская',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-150'
		} );
		this.stations.push( {
			name: 'Сокольники',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-151'
		} );
		this.stations.push( {
			name: 'Преображенская пл.',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-152'
		} );
		this.stations.push( {
			name: 'Черкизовская',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-153'
		} );
		this.stations.push( {
			name: 'Бульвар Рокоссовского',
			color: '#EE3124',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-154'
		} );
		this.stations.push( {
			name: 'Новокосино',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-155'
		} );
		this.stations.push( {
			name: 'Новогиреево',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-156'
		} );
		this.stations.push( {
			name: 'Перово',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-157'
		} );
		this.stations.push( {
			name: 'Авиамоторная',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-158'
		} );
		this.stations.push( {
			name: 'Площадь Ильича',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-159'
		} );
		this.stations.push( {
			name: 'Деловой центр',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-160'
		} );
		this.stations.push( {
			name: 'Парк Победы',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-161'
		} );
		this.stations.push( {
			name: 'Минская',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-162'
		} );
		this.stations.push( {
			name: 'Ломоносовский проспект',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-163'
		} );
		this.stations.push( {
			name: 'Раменки',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-164'
		} );
		this.stations.push( {
			name: 'Марксистская',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-165'
		} );
		this.stations.push( {
			name: 'Шоссе Энтузиастов',
			color: '#FFCC32',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-166'
		} );
		this.stations.push( {
			name: 'Щёлковская',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-167'
		} );
		this.stations.push( {
			name: 'Первомайская',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-168'
		} );
		this.stations.push( {
			name: 'Измайловская',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-169'
		} );
		this.stations.push( {
			name: 'Партизанская',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-170'
		} );
		this.stations.push( {
			name: 'Семёновская',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-171'
		} );
		this.stations.push( {
			name: 'Электрозаводская',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-172'
		} );
		this.stations.push( {
			name: 'Бауманская',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-173'
		} );

		this.stations.push( {
			name: 'Славянский бульвар',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-174'
		} );
		this.stations.push( {
			name: 'Кунцевская',
			color: '#0078BF',
			color: '#00C1F3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-175'
		} );
	
		this.stations.push( {
			name: 'Молодёжная',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-176'
		} );
		this.stations.push( {
			name: 'Крылатское',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-177'
		} );
		this.stations.push( {
			name: 'Строгино',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-178'
		} );
		this.stations.push( {
			name: 'Мякинино',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-179'
		} );
		this.stations.push( {
			name: 'Волоколамская',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-180'
		} );
		this.stations.push( {
			name: 'Митино',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-181'
		} );
		this.stations.push( {
			name: 'Пятницкое шоссе',
			color: '#0078BF',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-182'
		} );

		this.stations.push( {
			name: 'Выставочная',
			color: '#00C1F3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-183'
		} );
		this.stations.push( {
			name: 'Международная',
			color: '#00C1F3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-184'
		} );
		this.stations.push( {
			name: 'Кутузовская',
			color: '#00C1F3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-185'
		} );
		this.stations.push( {
			name: 'Фили',
			color: '#00C1F3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-186'
		} );
		this.stations.push( {
			name: 'Багратионовская',
			color: '#00C1F3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-187'
		} );
		this.stations.push( {
			name: 'Филёвский парк',
			color: '#00C1F3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-188'
		} );
		this.stations.push( {
			name: 'Пионерская',
			color: '#00C1F3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-189'
		} );
		this.stations.push( {
			name: 'Студенческая',
			color: '#00C1F3',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-190'
		} );

		this.stations.push( {
			name: 'Белокаменная',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-191'
		} );
		this.stations.push( {
			name: 'Ростокино',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-192'
		} );
		this.stations.push( {
			name: 'Окружная',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-193'
		} );
		this.stations.push( {
			name: 'Лихоборы',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-194'
		} );
		this.stations.push( {
			name: 'Коптево',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-195'
		} );
		
		this.stations.push( {
			name: 'Локомотив',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-196'
		} );
		this.stations.push( {
			name: 'Измайлово',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-197'
		} );
		this.stations.push( {
			name: 'Соколиная Гора',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-198'
		} );
		this.stations.push( {
			name: 'Андроновка',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-199'
		} );
		this.stations.push( {
			name: 'Нижегородская',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-200'
		} );
		this.stations.push( {
			name: 'Новохохловская',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-201'
		} );
		this.stations.push( {
			name: 'Угрешская',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-202'
		} );
		this.stations.push( {
			name: 'ЗИЛ',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-203'
		} );
		this.stations.push( {
			name: 'Верхние Котлы',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-204'
		} );
		this.stations.push( {
			name: 'Крымская',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-205'
		} );
		this.stations.push( {
			name: 'Пл.Гагарина',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-206'
		} );
		this.stations.push( {
			name: 'Лужники',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-207'
		} );
		this.stations.push( {
			name: 'Деловой центр(МЦК)',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-208'
		} );
		this.stations.push( {
			name: 'Шелепиха',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-209'
		} );
		this.stations.push( {
			name: 'Хорошёво',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-210'
		} );
		this.stations.push( {
			name: 'Зорге',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-211'
		} );
		this.stations.push( {
			name: 'Панфиловская',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-212'
		} );
		this.stations.push( {
			name: 'Стрешнево',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-213'
		} );
		this.stations.push( {
			name: 'Балтийская',
			color: '#ffffff',
			onRing: false,
			inRing: false,
			htmlId: 'map-mark-214'
		} );

		// selected list
		this.selected = [];

		// cache
		this.cache = new Object();
		this.cache.onRing = [];
		this.cache.inRing = [];

		// html template
		this.template = new Object();
		this.template.render = '<span><i class="fa fa-times-circle mu_block2_del selected{{id}}" aria-hidden="true"></i>{{name}}</span>';
		this.template.renderMobile = '<li class="{{class}}"><span class="selectedM{{id}}">{{name}}</span></li>';
		this.template.letterMobile = '<div class="block_station_header"><span>{{letter}}</span></div>';

		// submitting actions
		var self = this;
		$( '.empty-selected-list' ).click(function() {
			self.emptySelectedList();
		});
		$( '.select-stations-in-ring' ).click(function() {
			self.selectInRing(this);
		});
		$( '.select-stations-on-ring' ).click(function() {
			self.selectOnRing(this);
		});
		$('select.mu_select').on('change', function(){
		   self.searchSelect();
		})
		$('.mark, .name').click(function() {
		   self.directSelect(this);
		})
		$('#mobileInput').keyup(function() {
			self.mobileList();
		});
		$('.mu_btn_sel_del').on('click', function(){
			$('.search-txt').val('');
			self.render();
		});

	}


	// object creation
	var metroMap = new metroMapContruct();

	// building stations cache
	metroMap.buildCache = function(){
		for(var i = 0; i <this.stations.length; i++)
				if(this.stations[i].inRing)
					this.cache.inRing.push(i);
		for(var i = 0; i <this.stations.length; i++)
				if(this.stations[i].onRing)
					this.cache.onRing.push(i);
	}

	// rendering method
	metroMap.render = function(){
		$('.selected-items-container').empty();
		$('.mark-conatiner').removeClass('mark-conatiner-active');
		$('#totalCounter').html(this.selected.length);
		if(this.selected.length){
			$('.mu_img_map').addClass('active');
			$( '.hide-on-empty-selected' ).css( "display", "block" );
			for(var i = 0; i <this.selected.length; i++) {
				var str = this.template.render;
				str = str.replace( "{{name}}", this.stations[ this.selected[i] ].name );
				str = str.replace( "{{id}}", this.selected[i] );
				$( '.selected-items-container' ).append( str );
				$("#"+this.stations[ this.selected[i] ].htmlId).addClass('mark-conatiner-active');
				var self = this;
				$( '.selected'+ this.selected[i] ).click(function() {
					self.deleteStation( $(this).attr('class').split(' ').pop().replace( "selected", '' ) );
					self.render();
				});
			}
		}else{
			$('.mu_img_map').removeClass('active');
			$( '.hide-on-empty-selected' ).css( "display", "none" );
		}
		var list = [];
		for(var i = 0; i <this.stations.length; i++)
			if( this.selected.indexOf( i ) == -1 )
				list[i] = this.stations[i];
		this.buildSearch( list );
		this.mobileList();
	}

	// delete station from the list of selected
	metroMap.deleteStation = function( id ){
		for(var i = 0; i <this.selected.length; i++)
			if( this.selected[i]==id ){
				this.selected.splice(i,1);
				return false;
			}
	}

	// empty selected stations list
	metroMap.emptySelectedList = function(){
		$('#order1, #order2, #order1_m, #order2_m').prop('checked', false);
		this.selected = [];
		this.render();
	}

	// select stations in the ring
	metroMap.selectInRing = function( obj ){
		if( !$( "#"+$(obj).attr('for')+":checked" ).length ){
			for(var i = 0; i <this.cache.inRing.length; i++)
				if( this.selected.indexOf( this.cache.inRing[i] ) == -1 )
					this.selected.push( this.cache.inRing[i] );
		}else
			for(var i = 0; i <this.cache.inRing.length; i++)
				this.deleteStation( this.cache.inRing[i] );
		this.render();
	}

	// select stations on the ring
	metroMap.selectOnRing = function( obj ){
		if( !$( "#"+$(obj).attr('for')+":checked" ).length ){
			for(var i = 0; i <this.cache.onRing.length; i++)
				if( this.selected.indexOf( this.cache.onRing[i] ) == -1 )
					this.selected.push( this.cache.onRing[i] );
		}else
			for(var i = 0; i <this.cache.onRing.length; i++)
					this.deleteStation( this.cache.onRing[i] );
		this.render();
	}

	// direct station select on the map
	metroMap.directSelect = function( obj ){
		var self = this;
		this.stations.forEach(function(item, i) {
			if( item.htmlId == $(obj).parent().attr('id')){
				if( !$(obj).parent().hasClass( "mark-conatiner-active")) self.selected.push(i);
				else self.selected.splice( self.selected.indexOf(i), 1 );
				return false;
			}
		});
		this.render();
	}

	// rendering search results
	metroMap.buildSearch = function( list ){
		var count = ($('select.mu_select>option').length-1);
		for(var i=0; i<count; i++)
			$('select.mu_select')[0].sumo.remove(1);
		list.forEach(function(item, i) {
			$('select.mu_select')[0].sumo.add( i, item.name );
		});
		var options = $('.SumoSelect .opt label');
		$( options ).each(function(i) {
			$( list ).each(function(z) {
				var listName = $(options[i]).html();
				if ( list[z]!=undefined && listName != 'Поиск по названию' && listName == list[z].name ){
					$(options[i]).before( "<i class='search-list-mark' style='background-color:" + list[z].color + "'></i>" );
					return false;
				}
			});
		});
	}

	// applying search results
	metroMap.searchSelect = function(){
		var item = parseInt( $('select.mu_select option:selected')[0].value );
		if( this.selected.indexOf( item ) == -1 )
			this.selected.push( item );
		this.render();
	}

	// rendering mobile stations list
	metroMap.mobileList = function( search ){
		var search = $('#mobileInput').val().toLowerCase();
		$('#mobileList').empty();
		var abc = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ';
		for(var l = 0; l < abc.length; l++){
			var letterHead = false;
			for(var i = 0; i < this.stations.length; i++){
				if( this.stations[i].name[0] == abc[l] && (search=='' || this.stations[i].name.toLowerCase().indexOf(search) != -1) ){
					if(!letterHead){
						var str = this.template.letterMobile;
						str = str.replace( "{{letter}}", abc[l] );
						$( '#mobileList' ).append( str );
						letterHead = true;
					}
					var str = this.template.renderMobile;
					str = str.replace( "{{name}}", this.stations[i].name );
					str = str.replace( "{{id}}", i );
					if( this.selected.indexOf( i ) != -1 ) str = str.replace( "{{class}}", 'active' );
					$( '#mobileList' ).append( str );
					var self = this;
					$( '.selectedM'+ i ).click(function() {
						var id = parseInt( $(this).attr('class').split(' ').pop().replace( "selectedM", '' ) );
						if( self.selected.indexOf( id ) == -1 ) self.selected.push( id );
						else self.deleteStation( id );
						self.render();
					});
				}
			}
		}
	}



	// map initialization
	metroMap.render();
	metroMap.buildCache();


	
});

