
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
	})

	$('.nav').hover(function(){
		$(this).removeClass('an_toLeft').addClass('op1')
	})

	if (document.body.clientWidth>=768) {
		// pc事件和方法

	}else{
	    // 移动事件和方法
	    // 一些初始化操作
	    $('.ty_nav').attr('class','ty_nav2');
    	$('.logo img').attr("src",$('.logo img').attr('src').replace(/logo1/,"logo2"));
    	var menuEle = $("<span class='icon_menu'></span>");
    	$('.ty_nav_in').append(menuEle);

    	$('body').on('click','.icon_menu',function(){
    		$('html,body').animate({scrollTop: 0},600);
    		if($('.ty_nav2').hasClass('open_nav')){
    			$('.ty_nav2').removeClass('open_nav');
    			$('body').removeClass('oh')
    		}else{
    			$('.ty_nav2').addClass('open_nav');
    			$('body').addClass('oh')
    		}
    	})

    	$( $('.ty_bannar').length ? '.ty_bannar' : '.ty_nav,.ty_nav2').addClass('bbbb');
	}

	if ($('.ty_map').length>0) {
		var map = new BMap.Map("container");
	    // 洪泽湖坐标
	    var point = new BMap.Point(116.299818,39.94346);
	    map.centerAndZoom(point, 12);
	    map.addControl(new BMap.ScaleControl());
	    map.addControl(new BMap.OverviewMapControl());
	    map.addControl(new BMap.MapTypeControl());
	    //启用滚动放大
	    map.enableScrollWheelZoom()
	    // 创建标注
	    var marker = new BMap.Marker(point);
	    marker.enableDragging();
	    //本地搜索
	    var local = new BMap.LocalSearch(map, {
	        renderOptions: {map: map}
	    });
	    local.search('中国时代远望科技有限公司');

	    //驾车路线
	    var driving = new BMap.DrivingRoute(map, {
	        renderOptions: {
	            map: map,
	            autoViewport: true,
	            panel: "r-results"
	        }
	    });
	    //步行路线
	    var walking = new BMap.WalkingRoute(map, {
	        renderOptions: {
	            map: map,
	            panel: "r-results"
	        }
	    });
	    //公交路线
	    var transit = new BMap.TransitRoute(map, {
	        renderOptions: {map: map, panel: "r-results"}
	    });
	    $(function () {
	        // 行车
	        $('#car').on('click', function () {
	            driving.search($('#star').val(), $('#end').val());
	            $('#r-results').show();
	        })
	        // 公交
	        $('#bus').on('click', function () {
	            transit.search($('#bStar').val(), $('#bEnd').val());
	            $('#r-results').show();
	        })
	        // 步行
	        $('#walk').on('click', function () {
	            walking.search($('#wStar').val(), $('#wEnd').val());
	            $('#r-results').show();
	        })
	    })
	    $('#map').on('click', function () {
	    	local.search('中国时代远望科技有限公司');
	    	$('.ty_dialog').show();
	    })
	}
});
