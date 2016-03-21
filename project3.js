$(document).ready(function(){

	var paint = "white"    //the variable paint contains the initial "click", which is "white"
													// click function called on color palette and variable paint contains "this" palette's background color 
													// this simply captures whatever color is in the palette
	$(".color").click(function(){
		paint = $(this).css("background-color");
	})
													// with a second click, captured color from above is deposited in the row class,
													//but how does it know to only keep it in the id= row_x_box_y ?
													// using css method with parameters "background-color" and paint
	$(".row").click(function(){
		$(this).css("background-color", paint );
	});

});