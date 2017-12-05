
$(document).ready(function(){
	// 公共方法
	var publicFuc = {
		stophref: function(e){
			if ( e && e.preventDefault ){
				e.preventDefault();
			}else{
				window.event.returnValue = false;
				return false;
			}
		},
		stopbubble: function(e){
			if ( e && e.stopPropagation ){
				e.stopPropagation();
			}else{
				window.event.cancelBubble = true;
				return false;
			}
		},
		movescroll: function(btn,to) {
			$('html,body').animate({scrollTop: $(to).offset().top-60},600);
		}
	}

	// 动画延时函数
	function adddelay(obj,time){
		if (obj.length>0) {
			for (var i = 0; i < obj.length; i++) {
				obj.eq(i).addClass('an_delay'+(i*time+3));
			}
		}
	}

	// 动画增加函数
	function addAnimate(elem,Class,count,nums){
		if( elem.length > 0){
			var offsetT = elem.offset().top;
			var overHeight = $(document).scrollTop() + $(window).height() - 80;
			if (elem.length>1){
				for( var i = 0; i < elem.length; i++ ){
					if (overHeight > elem.eq(i).offset().top){
						if (!elem.eq(i).hasClass(Class)) {
							elem.eq(i).addClass(Class);
						}
					}
				}
			}else{
				if ( overHeight > offsetT ) {
					if (!elem.hasClass(Class)) {
						elem.addClass(Class);
						if (count) {
								var options = {
										useEasing : true,
										useGrouping : true,
										separator : ',',
										decimal : '.',
								};
								var number = parseInt($('#'+count).text());
								var numCount = new CountUp(count, 0, number, 0, 2.5, options);
								numCount.start()
						}
					}
				}
			}
		}
	}
	// 初始化
	(function init(){
		if ($('.ty_swiper').length) {
			lrbtn($('.ty_swiper .icon_left'), mySwiper , true);
			lrbtn($('.ty_swiper .icon_right'), mySwiper , false);
			lrbtn($('.ty_swiper_in .icon_left'), mySwiper2 , true);
			lrbtn($('.ty_swiper_in .icon_right'), mySwiper2, false);
			if ($(window).width() > 1440) {
				resizeWH($(".ty_swiper"),720,false);
				resizeWH($(".swiper-container"),720,false);
			}
		}
		initback();
		animateInit();
	})();

	$(window).resize(function(){
		if ($('.ty_swiper').length) {
			if ($(window).width() > 1440) {
				resizeWH($(".ty_swiper"),720,false);
				resizeWH($(".swiper-container"),720,false);
			}
		}
	})

	// 动画
	function animateInit(){
		var toTop = '.ty_index_de1,.ty_index_de2,.ty_index_team,.ty_index_news li,.xn_brand_list img,.ty_connect_con img,.xn_news_items img,.ty_text_con img,.xn_news_list li';
		var toLeft = '.ty_index_de1 img,.ty_index_de2 img,.ty_index_team img,.xn_common_rbox,.ty_nav_in .nav,.you_submit,.xn_items_txt';
		var toRight = '.ty_index_de1 p,.ty_index_de2 p,.ty_index_team p,.xn_common_lbox,.ty_nav_in .logo,.ty_connect_con p,.xn_news_slider,.xn_news_items p,.ty_text_con p';
		addAnimate($(toTop),'an_toTop');
		addAnimate($(toLeft),'an_toLeft');
		addAnimate($(toRight),'an_toRight');
	}

	$(window).scroll(function() {
  		animateInit();
	});

	// 事件监听
	function lrbtn(btn,swiper,Left){
		btn.click(function(){
			Left ? swiper.swipePrev() : swiper.swipeNext();
		})
	}

	// 动态计算宽高
	function resizeWH(ele,before,widthORheight){
		var nowWidth = $(window).width();
		widthORheight ? ele.width(nowWidth/1440*before) : ele.height(nowWidth/1440*before)
	}

	function initback(){
		var bodyEle = $('body');
		var baclEle = $("<img class='backTop' src='images/ty/backTop.png'>");
		bodyEle.append(baclEle);
		$('body').on('click','.backTop',function(){
			$('html,body').animate({scrollTop: 0},600);
		})
	}

	$('body').on('click','.ty_swiper',function(){
		console.log(111)
	})

	if (document.body.clientWidth>=768) {
		// pc事件和方法

	}else{
    // 移动事件和方法

	}
});
