function ibg(){

	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
	$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
	}
	
ibg();


$('.filter__item').click(function(event){
		var i=$(this).data('filter');
	if (i==1){
		$('.gallery__column').show();
	}else {
		$('.gallery__column').hide();
		$('.gallery__column.f_'+i).show();
	}

	$('.filter__item').removeClass('active');
	$(this).addClass('active');
	
	

	return false;

	
});



