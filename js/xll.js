
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

	if (document.body.clientWidth>=768) {
		// pc事件和方法

	}else{
    // 移动事件和方法

	}
});
