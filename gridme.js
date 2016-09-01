// JavaScript Document
//to use, add .gridme class to any elements you want to shape into an even grid.

jQuery(document).ready(function( $ ) {
	"use strict";

	if($(".gridme").length){
		$(window).on("load", function() {
			gridme();
		});
		$( window ).resize(function() {
			gridme();
		});
	}
	
	function gridme() {
		var maxHeight = -1;
	
		$('.gridme').each(function() {
			$(this).height(''); //clear any styled heights
			maxHeight = maxHeight > $(this).innerHeight() ? maxHeight : $(this).innerHeight();
		});
		
		$('.gridme').promise().done(function() {
			$('.gridme').height(maxHeight);
		});
	}
	
});
