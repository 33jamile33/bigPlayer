$(function() {
	$('#startTime').date({
		theme: "datetime"
	});

	$('#endTime').date({
		theme: "datetime"
	});
	$('#stopTime').date({
		theme: "datetime"
	});

});

$('.littleBox').each(function() {
	$(this).click(function() {
//		$(this).addClass('test');
//		$(this).siblings().removeClass('test');
		$(this).css('background-color','#2FB791');
		$(this).siblings().css('background-color','');
	});
});


$('.number').each(function(){
	$(this).click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});	
});

//费用
$('.price').each(function(){
	$(this).click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});	
});

//性别
$('.sex').each(function(){
	$(this).click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	
});
