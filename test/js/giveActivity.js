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
		$(this).css('background-color', '#2FB791');
		$(this).siblings().css('background-color', '');
	});
});

$('.number').each(function() {
	$(this).click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
});

//费用
$('.price').each(function() {
	$(this).click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
});

//性别
$('.sex').each(function() {
	$(this).click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

});

$('#check').bind({
	click: function() {
		var $val = $("#pwd").val();
		var $val2 = $("#pwd1").val();
		var dp = $("#pwd1").css("display");
		var $vals = $("#pwds").val();
		var $vals2 = $("#pwds1").val();
		var dps = $("#pwds1").css("display");
		if(dp == "none") {
			$("#pwd1").val($val);
			$("#pwd").hide();
			$("#pwd1").show();
			$("#pwds1").val($val);
			$("#pwds").hide();
			$("#pwds1").show();
		} else {
			$("#pwd").val($val2);
			$("#pwd").show();
			$("#pwd1").hide();
			$("#pwds").val($val2);
			$("#pwds").show();
			$("#pwds1").hide();
		}
	}
})