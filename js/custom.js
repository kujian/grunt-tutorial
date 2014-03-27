$(function(){
	$(".entry-title,.widget-header").each(function(i){
		$(this).on("click",function(){
			var _this = $(this);
			if(_this.hasClass('open-content')){
				_this.removeClass('open-content');
			}else{
				_this.addClass('open-content');
			}
			_this.nextAll().slideToggle(400);
		});
	});
});